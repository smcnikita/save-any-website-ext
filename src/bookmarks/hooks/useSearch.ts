import { useMemo } from 'react';
import { useDebounceValue } from 'usehooks-ts';

import type { SavedTabData } from '@t/index';

const useSearch = (tabs: SavedTabData[]) => {
    const [query, setQuery] = useDebounceValue('', 500);

    const changeQuery = (q: string) => {
        setQuery(q);
    };

    const clearQuery = () => {
        setQuery('');
    };

    const filteredTabs = useMemo(() => {
        return tabs.filter((tab) => tab.title?.toLowerCase().includes(query.trim().toLowerCase()));
    }, [tabs, query]);

    return { query, filteredTabs, changeQuery, clearQuery };
};

export default useSearch;
