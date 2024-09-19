type TypeID = string | undefined;
type TypeTitle = string | undefined;

export function createContextItem(id: TypeID, title: TypeTitle) {
    const type: browser.contextMenus.ItemType = 'normal';
    browser.contextMenus.create({ title, type, id });
}
