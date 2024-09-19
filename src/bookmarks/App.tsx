import { useEffect } from 'react';

import useTabs from './hooks/useTabs';
import useSearch from './hooks/useSearch';

import Search from './components/Search';
import Sidebar from './components/Sidebar';
import BookmarksList from './components/BookmarksList';
import { TABS_STORAGE_KEY } from '@const/index';

const App = () => {
    const { tabs, loadTabsFromStorage, removeTab, updateTabs } = useTabs();
    const { query, filteredTabs, changeQuery } = useSearch(tabs);

    const remove = () => {
        browser.storage.local.remove(TABS_STORAGE_KEY);
        updateTabs([]);
    };

    useEffect(() => {
        loadTabsFromStorage();
    }, []);

    return (
        <>
            <h1 className="title">{browser.i18n.getMessage('bookmarks')}</h1>

            <div className="clear">
                <button className="removeBtn" type="button" onClick={remove}>
                    {browser.i18n.getMessage('clear_storage')}
                </button>
            </div>

            <Search query={query} changeQuery={changeQuery} />

            <div className="wrapper">
                <Sidebar tabs={filteredTabs} />

                <main className="main">
                    <BookmarksList tabs={filteredTabs} onClick={removeTab} />
                </main>
            </div>
        </>
    );
};

export default App;
