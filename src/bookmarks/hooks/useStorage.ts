import browser from 'webextension-polyfill';

import { TABS_STORAGE_KEY } from '@const/index';

import type { BaseData, SavedTabData } from '@t/index';

const useStorage = () => {
    const getData = async (): Promise<BaseData | undefined> => {
        const storedData = await browser.storage.local.get(TABS_STORAGE_KEY);
        const storedTabs = storedData[TABS_STORAGE_KEY] ?? '[]';

        if (typeof storedTabs === 'string') {
            return {
                tabs: JSON.parse(storedTabs),
            };
        }
    };

    const save = async (tabsToSave: SavedTabData[]): Promise<void> => {
        await browser.storage.local.set({
            [TABS_STORAGE_KEY]: JSON.stringify(tabsToSave),
        });
        await getData();
    };

    return { getData, save };
};

export default useStorage;
