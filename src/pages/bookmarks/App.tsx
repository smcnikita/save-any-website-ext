import browser from 'webextension-polyfill';
import useMenu from './hooks/useMenu';
import useTabs from './hooks/useTabs';
import useSearch from './hooks/useSearch';
import useFilter from './hooks/useFilter';
import Search from './components/Search';
import BookmarksList from './components/BookmarksList';
import Actions from './components/Actions';
import Menu from './components/Menu';
import type { MenuItemIDs } from '@t/index';

const App = () => {
    const { menuID, updateMenuID } = useMenu();
    const { tabs, removeTab, renameTab, updateRead } = useTabs();
    const { query, clearQuery, changeQuery } = useSearch();
    const { tabs: filteredTabs } = useFilter(tabs, menuID, query);

    const onChangeMenuItem = (value: MenuItemIDs) => {
        clearQuery();
        updateMenuID(value);
    };

    return (
        <>
            <h1 className="text-3xl">{browser.i18n.getMessage('bookmarks')}</h1>

            <Actions />
            <Menu handleChange={onChangeMenuItem} />
            <Search query={query} changeQuery={changeQuery} />
            <BookmarksList tabs={filteredTabs} onClick={removeTab} renameTab={renameTab} updateRead={updateRead} />
        </>
    );
};

export default App;
