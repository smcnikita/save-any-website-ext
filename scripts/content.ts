import type { SavedTabData } from '@t/index';

const TABS_STORAGE_KEY = 'tabs';

browser.storage.local.get(TABS_STORAGE_KEY).then((res) => {
    const savedTabs = parseTabs(res.tabs as string | undefined);

    const url = window.location.href;

    const findTab = savedTabs.find((tab) => tab.url === url);

    const isSave = !!findTab;

    browser.runtime.sendMessage({
        action: 'changeIcon',
        iconPath: isSave
            ? browser.runtime.getURL('icons/icon-fill-48.png')
            : browser.runtime.getURL('icons/icon-48.png'),
    });
});

function parseTabs(json: string | undefined): SavedTabData[] {
    let tabs: SavedTabData[] = [];

    if (json) {
        try {
            const parsed = JSON.parse(json);

            if (Array.isArray(parsed)) {
                tabs = parsed as SavedTabData[];
            }
        } catch (error) {
            console.error('Failed to parse JSON', error);
        }
    }

    return tabs;
}
