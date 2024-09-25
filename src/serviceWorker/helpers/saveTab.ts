import browser from 'webextension-polyfill';

import { TABS_STORAGE_KEY } from '@const/index';

import { setIcon } from './setIcon';

import type { SavedTabData } from '@t/index';

export async function saveTab(newTab: SavedTabData, existingTabs: SavedTabData[], tabId: browser.Tabs.Tab['id']) {
    const updatedTabs = [...existingTabs, newTab];
    await browser.storage.local.set({
        [TABS_STORAGE_KEY]: JSON.stringify(updatedTabs),
    });
    await setIcon(true, tabId);
}
