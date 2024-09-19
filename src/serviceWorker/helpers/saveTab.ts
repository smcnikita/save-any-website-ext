import type { SavedTabData } from '@t/index';
import { setIcon } from './setIcon';
import { TABS_STORAGE_KEY } from '@const/index';

export async function saveTab(newTab: SavedTabData, existingTabs: SavedTabData[], tabId: browser.tabs.Tab['id']) {
    const updatedTabs = [...existingTabs, newTab];
    await browser.storage.local.set({
        [TABS_STORAGE_KEY]: JSON.stringify(updatedTabs),
    });
    await setIcon(true, tabId);
}
