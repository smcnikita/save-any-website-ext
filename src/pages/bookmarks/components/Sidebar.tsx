import browser from 'webextension-polyfill';

import type { SavedTabData } from '@t/index';

type Props = {
    tabs: SavedTabData[];
};

const Sidebar = ({ tabs }: Props) => {
    return (
        <div className="w-[160px] flex flex-col gap-6 px-3 border-r border-x-gray-300">
            <span>
                {browser.i18n.getMessage('tag_all')} ({tabs.length})
            </span>
        </div>
    );
};

export default Sidebar;
