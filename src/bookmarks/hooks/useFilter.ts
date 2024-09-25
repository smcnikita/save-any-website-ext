import { useMemo } from 'react';

import type { MenuItemIDs, SavedTabData } from '@t/index';

const useFilter = (baseTabs: SavedTabData[], menuID: MenuItemIDs, query: string) => {
    const tabs = useMemo(() => {
        return baseTabs.filter((tab) => {
            const isTitle = tab.title?.toLowerCase().includes(query.trim().toLowerCase());
            const isURL = tab.url?.includes(query.trim());

            if (menuID === 'all') {
                return isTitle || isURL;
            }

            if (menuID === 'archive') {
                return (isTitle || isURL) && tab.read;
            }

            return (isTitle || isURL) && !tab.read;
        });
    }, [baseTabs, query, menuID]);

    return { tabs };
};

export default useFilter;
