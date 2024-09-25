import browser from 'webextension-polyfill';

export async function setIcon(isSave: boolean, id: browser.Tabs.Tab['id']) {
    const iconPath = isSave ? 'icons/icon-fill-48.png' : 'icons/icon-48.png';

    await browser.action.setIcon({
        path: browser.runtime.getURL(iconPath),
        tabId: id,
    });
}
