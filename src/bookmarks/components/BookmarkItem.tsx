import { Button, ConfigProvider } from 'antd';
import type { SavedTabData } from '@t/index';
import { DeleteOutlined } from '@ant-design/icons';

type Props = {
    index: number;
    tab: SavedTabData;
    onClick: (url: string | undefined, title: string | undefined) => Promise<void>;
};

const BookmarkItem = ({ tab, onClick }: Props) => {
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
        </div>
    );
};

export default BookmarkItem;
