type Props = {
    query: string;
    changeQuery: (q: string) => void;
};

const Search = ({ query, changeQuery }: Props) => {
    return (
        <div className="search">
            <input
                className="searchBox"
                type="search"
                name="search"
                id="search"
                defaultValue={query}
                autoComplete="off"
                placeholder={browser.i18n.getMessage('search_bookmarks')}
                onChange={(e) => changeQuery(e.target.value)}
            />
        </div>
    );
};

export default Search;
