import { TABS_STORAGE_KEY } from '@const/index';
import { parseTabs } from '@utils/parseTabs';
import { saveOrRemoveTab } from './../helpers/saveOrRemoveTab';

browser.action.onClicked.addListener(async (currentTab) => {
    const tabsJSON = await browser.storage.local.get(TABS_STORAGE_KEY);
    const savedTabs = parseTabs(tabsJSON.tabs);

    saveOrRemoveTab({ currentTab, savedTabs });
});
