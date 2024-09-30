import { useMemo } from 'react';
import type { MenuItemIDs, SavedTabData } from '@t/index';

const useFilter = (baseTabs: SavedTabData[], menuID: MenuItemIDs, query: string) => {
    const tabs = useMemo(() => {
        if (!baseTabs.length) return [];

        const normalizedQuery = query.trim().toLowerCase();
        const filterByQuery = (tab: SavedTabData) =>
            tab.title?.toLowerCase().includes(normalizedQuery) || tab.url?.includes(normalizedQuery);

        return baseTabs.filter((tab) => {
            const matchesQuery = filterByQuery(tab);

            if (menuID === 'archive') return matchesQuery && tab.read;
            if (menuID === 'input') return matchesQuery && !tab.read;

            return matchesQuery;
        });
    }, [baseTabs, query, menuID]);

    return { tabs };
};

export default useFilter;
