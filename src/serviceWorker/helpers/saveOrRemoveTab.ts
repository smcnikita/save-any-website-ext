import type { SavedTabData } from '@t/index';
import { deleteTabByUrl } from './deleteTabByUrl';
import { saveTab } from './saveTab';

type Params = {
    savedTabs: SavedTabData[];
    currentTab: browser.tabs.Tab;
};

export async function saveOrRemoveTab({ currentTab, savedTabs }: Params) {
    const { title, favIconUrl, id } = currentTab;
    const url = currentTab.url?.split('?')[0];

    const findTab = savedTabs.find((tab) => tab.url === url);
    const isSave = !!findTab;

    if (isSave) {
        await deleteTabByUrl(url, savedTabs, id);
        return;
    }

    await saveTab({ title, url, favIconUrl }, savedTabs, id);
}
