import { useState } from 'react';
import { Button, Checkbox, ConfigProvider, List } from 'antd';
import browser from 'webextension-polyfill';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';

import NewNameModal from './NewNameModal';

import type { SavedTabData } from '@t/index';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

type Props = {
    tab: SavedTabData;
    onClick: (url: string | undefined, title: string | undefined) => Promise<void>;
    renameTab: (url: string, newTitle: string) => Promise<void>;
    updateRead: (url: string, read: boolean) => Promise<void>;
};

const BookmarkItem = ({ tab, onClick, renameTab, updateRead }: Props) => {
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

    const onChangeRead = async (value: CheckboxChangeEvent) => {
        if (!tab.url) {
            return;
        }
        await updateRead(tab.url, value.target.checked);
    };

    return (
        <List.Item.Meta
            avatar={<Checkbox checked={tab.read} onChange={onChangeRead} />}
            title={
                <a href={tab.url} target="_blank" className="flex items-center gap-2">
                    <img
                        src={tab.favIconUrl ?? browser.runtime.getURL('icons/icon-fill-48.png')}
                        alt="Favicon"
                        width={16}
                        height={16}
                    />
                    {tab.title}
                </a>
            }
            description={
                <div className="flex items-center gap-3 pt-2">
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
                    <Button
                        htmlType="button"
                        className="lowercase"
                        icon={<FormOutlined />}
                        onClick={() => setOpen(true)}
                    >
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
            }
        />
    );
};

export default BookmarkItem;
