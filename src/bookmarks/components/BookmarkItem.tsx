import { Button, ConfigProvider } from 'antd';
import type { SavedTabData } from '@t/index';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { useState } from 'react';
import NewNameModal from './NewNameModal';

type Props = {
    tab: SavedTabData;
    onClick: (url: string | undefined, title: string | undefined) => Promise<void>;
    renameTab: (url: string, newTitle: string) => Promise<void>;
};

const BookmarkItem = ({ tab, onClick, renameTab }: Props) => {
    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    const updateNewTitle = (value: string) => {
        setNewTitle(value);
    };

    const handleOk = async () => {
        if (!newTitle) {
            return;
        }
        if (!tab.url) {
            return;
        }
        await renameTab(tab.url, newTitle);
        setOpen(false);
    };

    return (
        <div className="py-2 flex flex-col gap-4">
            <a
                target="_blank"
                href={tab.url}
                className="flex gap-3 items-center text-base no-underline hover:underline"
            >
                <img
                    src={tab.favIconUrl ?? browser.runtime.getURL('icons/icon-fill-48.png')}
                    alt="Favicon"
                    width={16}
                    height={16}
                />
                {tab.title}
            </a>

            <div className="flex gap-3 items-center">
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#EF5A6F',
                        },
                    }}
                >
                    <Button
                        htmlType="button"
                        shape="circle"
                        icon={<DeleteOutlined />}
                        onClick={async () => await onClick(tab.url, tab.title)}
                    />
                </ConfigProvider>
                <Button htmlType="button" className="lowercase" icon={<FormOutlined />} onClick={() => setOpen(true)}>
                    {browser.i18n.getMessage('rename_tab')}
                </Button>
                <NewNameModal
                    open={open}
                    oldTitle={tab.title}
                    newTitle={newTitle}
                    onOk={handleOk}
                    onCancel={() => setOpen(false)}
                    updateNewTitle={updateNewTitle}
                />
            </div>
        </div>
    );
};

export default BookmarkItem;
