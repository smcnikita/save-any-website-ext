import browser from 'webextension-polyfill';
import { List } from 'antd';
import BookmarkItem from './BookmarkItem';
import type { SavedTabData } from '@t/index';

type Props = {
    tabs: SavedTabData[];
    onClick: (url: string | undefined, title: string | undefined) => Promise<void>;
    renameTab: (url: string, newTitle: string) => Promise<void>;
    updateRead: (url: string, read: boolean) => Promise<void>;
};

const BookmarksList = ({ tabs, onClick, renameTab, updateRead }: Props) => {
    if (tabs.length === 0) {
        return <div>{browser.i18n.getMessage('no_bookmarks')}</div>;
    }

    return (
        <List
            itemLayout="horizontal"
            dataSource={tabs}
            renderItem={(item) => (
                <List.Item>
                    <BookmarkItem tab={item} onClick={onClick} renameTab={renameTab} updateRead={updateRead} />
                </List.Item>
            )}
        />
    );
};

export default BookmarksList;
