import { ClearOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Upload } from 'antd';
import { TABS_STORAGE_KEY } from '@const/index';
import { useState } from 'react';
import Message from './components/Message';
import type { UploadChangeParam } from 'antd/es/upload';

const App = () => {
    const [isDownload, setIsDownload] = useState(false);
    const [isFileLoad, setIsFileLoad] = useState(false);
    const [isTabsRemove, setIsTabsRemove] = useState(false);

    const remove = async () => {
        if (isTabsRemove) {
            return;
        }
        await browser.storage.local.remove(TABS_STORAGE_KEY);
        setIsTabsRemove(true);
    };

    const download = async () => {
        if (isDownload) {
            return;
        }
        const storageObj = await browser.storage.local.get(TABS_STORAGE_KEY);
        const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storageObj));
        const dlAnchorElem = document.getElementById('downloadAnchorElem');
        if (!dlAnchorElem) {
            return;
        }
        if (!isDownload) {
            dlAnchorElem.setAttribute('href', dataStr);
            const nowDate = new Date().toJSON().slice(0, 10);
            dlAnchorElem.setAttribute('download', `${nowDate}_simple_bookmarks.json`);
            dlAnchorElem.click();
            setIsDownload(true);
        }
    };

    const handleFileChange = (info: UploadChangeParam) => {
        if (isFileLoad) {
            return;
        }

        const file = info.file;

        if (file.status === 'done') {
            const reader = new FileReader();
            reader.onload = async () => {
                const content = reader.result;
                if (content) {
                    const data = JSON.parse(content.toString());
                    if (data[TABS_STORAGE_KEY]) {
                        data[TABS_STORAGE_KEY] = JSON.parse(data[TABS_STORAGE_KEY]);
                        await browser.storage.local.set({ [TABS_STORAGE_KEY]: JSON.stringify(data.tabs) });
                        setIsFileLoad(true);
                    }
                }
            };

            reader.readAsText(file.originFileObj as Blob);
        } else if (file.status === 'error') {
            console.error('File upload failed.');
        }
    };

    return (
        <div className="p-6 flex flex-col gap-3">
            {/* Clear Storage */}
            {!isTabsRemove && (
                <ConfigProvider theme={{ token: { colorPrimary: '#EF5A6F' } }}>
                    <Button htmlType="button" icon={<ClearOutlined />} onClick={remove}>
                        {browser.i18n.getMessage('clear_storage')}
                    </Button>
                </ConfigProvider>
            )}

            {isTabsRemove && <Message>{browser.i18n.getMessage('tabs_deleted')}</Message>}

            {/* Download Storage */}

            {!isDownload && (
                <Button htmlType="button" icon={<ClearOutlined />} onClick={download}>
                    <a id="downloadAnchorElem" className="none" />
                    {browser.i18n.getMessage('download_tabs')}
                </Button>
            )}

            {isDownload && <Message>{browser.i18n.getMessage('tabs_download')}</Message>}

            {/* Upload */}
            {!isFileLoad && (
                <Upload accept="application/JSON" onChange={handleFileChange} showUploadList={false} className="w-full">
                    <Button htmlType="button" icon={<UploadOutlined />} className="w-full">
                        {browser.i18n.getMessage('upload_tabs')}
                    </Button>
                </Upload>
            )}

            {isFileLoad && <Message>{browser.i18n.getMessage('upload_success')}</Message>}
        </div>
    );
};

export default App;
