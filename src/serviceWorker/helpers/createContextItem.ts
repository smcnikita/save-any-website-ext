import browser from 'webextension-polyfill';

type TypeID = string | undefined;
type TypeTitle = string | undefined;

export function createContextItem(id: TypeID, title: TypeTitle) {
    const type = 'normal';
    browser.contextMenus.create({ title, type, id });
}
