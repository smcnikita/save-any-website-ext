import { useCallback, useState } from 'react';

const DEFAULT_QUERY = '';

const useSearch = () => {
    const [query, setQuery] = useState(DEFAULT_QUERY);

    const changeQuery = useCallback((q: string) => {
        setQuery(q);
    }, []);

    const clearQuery = useCallback(() => {
        setQuery(DEFAULT_QUERY);
    }, []);

    return { query, changeQuery, clearQuery };
};

export default useSearch;
