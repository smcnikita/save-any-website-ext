import browser, { type Menus } from 'webextension-polyfill';

import { TABS_STORAGE_KEY } from '@const/index';

import { createContextItem } from '../helpers/createContextItem';

enum ids {
    openExtensionPage = 'openExtensionPage',
    clearStorageTabs = 'clearStorageTabs',
}

browser.contextMenus.onClicked.addListener(genericOnClick);

browser.runtime.onInstalled.addListener(() => {
    createContextItem(ids.openExtensionPage, browser.i18n.getMessage('open_extension_page'));
    createContextItem(ids.clearStorageTabs, browser.i18n.getMessage('clear_storage_tabs'));
});

function genericOnClick(info: Menus.OnClickData) {
    switch (info.menuItemId) {
        case ids.openExtensionPage:
            browser.tabs.create({ url: browser.runtime.getURL('bookmarks.html') });
            break;

        case ids.clearStorageTabs:
            browser.storage.local.remove(TABS_STORAGE_KEY);
            break;

        default:
            break;
    }
}
