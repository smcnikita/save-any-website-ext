import browser from 'webextension-polyfill';

import { deleteTabByUrl } from './deleteTabByUrl';
import { saveTab } from './saveTab';

import type { SavedTabData } from '@t/index';

type Params = {
    savedTabs: SavedTabData[];
    currentTab: browser.Tabs.Tab;
};

export async function saveOrRemoveTab({ currentTab, savedTabs }: Params) {
    const { title, favIconUrl, id } = currentTab;
    const url = currentTab.url;

    const findTab = savedTabs.find((tab) => tab.url === url);
    const isSave = !!findTab;

    if (isSave) {
        await deleteTabByUrl(url, savedTabs, id);
        return;
    }

    await saveTab({ title, url, favIconUrl, read: false }, savedTabs, id);
}
