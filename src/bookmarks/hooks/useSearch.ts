import { useState } from 'react';

const useSearch = () => {
    const [query, setQuery] = useState('');

    const changeQuery = (q: string) => {
        setQuery(q);
    };

    const clearQuery = () => {
        setQuery('');
    };

    return {
        query,
        changeQuery,
        clearQuery,
    };
};

export default useSearch;
