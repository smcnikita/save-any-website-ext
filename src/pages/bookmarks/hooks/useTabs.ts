import { useCallback, useEffect, useState } from 'react';
import { TABS_STORAGE_KEY } from '@const/index';
import { getBookmarks, removeBookmark, renameBookmark, updateBookmark } from '@/http/bookmarks';
import type { SavedTabData } from '@t/index';

const useTabs = () => {
    const [tabs, setTabs] = useState<SavedTabData[]>([]);

    const getData = useCallback(async () => {
        try {
            const res = await getBookmarks();
            if (res[TABS_STORAGE_KEY]) {
                const tabs = JSON.parse(res[TABS_STORAGE_KEY] as string) as SavedTabData[];
                setTabs(tabs);
            }
        } catch (error) {
            console.error('Error get data', error);
        }
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    const updateTabs = async (newTabs: SavedTabData[], updateFunc: (tabs: SavedTabData[]) => Promise<void>) => {
        try {
            await updateFunc(newTabs);
            setTabs(newTabs);
        } catch (error) {
            console.error('Error updating tabs', error);
        }
    };

    const removeTab = async (url?: string) => {
        if (!url) return;
        const newTabs = tabs.filter((tab) => tab.url !== url);
        await updateTabs(newTabs, removeBookmark);
    };

    const renameTab = async (url: string, newTitle: string) => {
        const newTabs = tabs.map((tab) => (tab.url === url ? { ...tab, title: newTitle } : tab));
        await updateTabs(newTabs, renameBookmark);
    };

    const updateRead = async (url: string, value: boolean) => {
        const newTabs = tabs.map((tab) => (tab.url === url ? { ...tab, read: value } : tab));
        await updateTabs(newTabs, updateBookmark);
    };

    return { tabs, removeTab, renameTab, updateRead, getData };
};

export default useTabs;
