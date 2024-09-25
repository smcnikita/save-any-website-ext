import { useState } from 'react';

import { TABS_STORAGE_KEY } from '@const/index';

import type { BaseData, SavedTabData } from '@t/index';

type Props = {
    getData: () => Promise<BaseData | undefined>;
    save: (tabsToSave: SavedTabData[]) => Promise<void>;
};

const useTabs = (props: Props) => {
    const { getData: init, save } = props;

    const [tabs, setTabs] = useState<SavedTabData[]>([]);

    const updateTabs = (newTabs: SavedTabData[]) => {
        setTabs(newTabs);
    };

    const getData = async () => {
        await init().then((res) => {
            if (res && res[TABS_STORAGE_KEY]) {
                setTabs(res[TABS_STORAGE_KEY]);
            }
        });
    };

    const removeTab = async (url?: string, title?: string) => {
        const filteredTabs = tabs.filter((tab) => tab.url !== url && tab.title !== title);
        await save(filteredTabs);
    };

    const renameTab = async (url: string, newTitle: string) => {
        const newTabs = tabs.map((el) => {
            if (el.url === url) {
                return { ...el, title: newTitle };
            } else {
                return el;
            }
        });
        await save(newTabs);
        await getData();
    };

    const updateRead = async (url: string, value: boolean) => {
        const newTabs = tabs.map((el) => {
            if (el.url === url) {
                return { ...el, read: value };
            } else {
                return el;
            }
        });
        await save(newTabs);
        await getData();
    };

    return { tabs, updateTabs, removeTab, renameTab, updateRead, getData };
};

export default useTabs;
