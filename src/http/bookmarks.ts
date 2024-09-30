import browser from 'webextension-polyfill';
import { TABS_STORAGE_KEY } from '@const/index';
import type { SavedTabData } from '@t/index';

type GetRes = Promise<{ [key: string]: unknown }>;
type SaveRes = Promise<void>;
type RemoveRes = Promise<void>;

export const getBookmarks = async (): GetRes => {
    return await browser.storage.local.get(TABS_STORAGE_KEY);
};

export const saveBookmarks = async (tabs: SavedTabData[]): SaveRes => {
    await browser.storage.local.set({
        [TABS_STORAGE_KEY]: JSON.stringify(tabs),
    });
};

export const removeBookmark = async (newTabs: SavedTabData[]): RemoveRes => {
    await saveBookmarks(newTabs);
};

export const renameBookmark = async (newTabs: SavedTabData[]): RemoveRes => {
    await saveBookmarks(newTabs);
};

export const updateBookmark = async (newTabs: SavedTabData[]): RemoveRes => {
    await saveBookmarks(newTabs);
};
