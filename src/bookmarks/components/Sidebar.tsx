import type { SavedTabData } from '@t/index';

type Props = {
    tabs: SavedTabData[];
};

const Sidebar = ({ tabs }: Props) => {
    return (
        <div className="sidebar">
            <span>
                {browser.i18n.getMessage('tag_all')} ({tabs.length})
            </span>
        </div>
    );
};

export default Sidebar;
