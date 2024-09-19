import type { SavedTabData } from '@t/index';
import BookmarkItem from './BookmarkItem';

type Props = {
    tabs: SavedTabData[];
    onClick: (url: string | undefined, title: string | undefined) => Promise<void>;
};

const BookmarksList = ({ tabs, onClick }: Props) => {
    if (tabs.length === 0) {
        return <div>{browser.i18n.getMessage('no_bookmarks')}</div>;
    }

    return (
        <div className="list">
            {tabs.map((tab, index) => (
                <BookmarkItem key={tab.url + '_' + index} index={index} tab={tab} onClick={onClick} />
            ))}
        </div>
    );
};

export default BookmarksList;
