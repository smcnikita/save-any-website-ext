import { Input } from 'antd';
import browser from 'webextension-polyfill';

type Props = {
    query: string;
    changeQuery: (q: string) => void;
};

const Search = ({ query, changeQuery }: Props) => {
    return (
        <div>
            <Input
                type="search"
                name="search"
                id="search"
                value={query}
                autoComplete="off"
                placeholder={browser.i18n.getMessage('search_bookmarks')}
                onChange={(e) => changeQuery(e.target.value)}
            />
        </div>
    );
};

export default Search;
