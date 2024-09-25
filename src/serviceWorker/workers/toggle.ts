import browser from 'webextension-polyfill';

import { TABS_STORAGE_KEY } from '@const/index';

import { parseTabs } from '@utils/parseTabs';

import { saveOrRemoveTab } from '../helpers/saveOrRemoveTab';

browser.action.onClicked.addListener(async (currentTab) => {
    const tabsJSON = await browser.storage.local.get(TABS_STORAGE_KEY);
    const storedTabs = tabsJSON[TABS_STORAGE_KEY] ?? '[]';

    if (typeof storedTabs === 'string') {
        const savedTabs = parseTabs(storedTabs);
        saveOrRemoveTab({ currentTab, savedTabs });
    }
});
