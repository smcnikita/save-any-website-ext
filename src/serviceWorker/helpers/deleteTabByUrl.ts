import browser from 'webextension-polyfill';

import { TABS_STORAGE_KEY } from '@const/index';

import { setIcon } from './setIcon';

import type { SavedTabData } from '@t/index';

export async function deleteTabByUrl(
    targetUrl: string | undefined,
    savedTabs: SavedTabData[],
    tabId: browser.Tabs.Tab['id']
) {
    if (!targetUrl) {
        return;
    }

    const filteredTabs = savedTabs.filter((tab) => tab.url !== targetUrl);

    await browser.storage.local.set({
        [TABS_STORAGE_KEY]: JSON.stringify(filteredTabs),
    });

    await setIcon(false, tabId);
}
