import { useEffect } from 'react';

import useTabs from './hooks/useTabs';
import useSearch from './hooks/useSearch';

import Search from './components/Search';
import Sidebar from './components/Sidebar';
import BookmarksList from './components/BookmarksList';
import Actions from './components/Actions';

const App = () => {
    const { tabs, loadTabsFromStorage, removeTab, renameTab } = useTabs();
    const { query, filteredTabs, changeQuery } = useSearch(tabs);

    useEffect(() => {
        loadTabsFromStorage();
    }, []);

    return (
        <>
            <h1 className="text-3xl">{browser.i18n.getMessage('bookmarks')}</h1>

            <Actions />

            <Search query={query} changeQuery={changeQuery} />

            <div className=" flex">
                <Sidebar tabs={filteredTabs} />

                <main className="w-[540px] px-6">
                    <BookmarksList tabs={filteredTabs} onClick={removeTab} renameTab={renameTab} />
                </main>
            </div>
        </>
    );
};

export default App;
