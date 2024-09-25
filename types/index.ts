export type MenuItemIDs = 'all' | 'input' | 'archive';

export type SavedTabData = {
    title?: string;
    favIconUrl?: string;
    url?: string;
    read?: boolean;
};

export type BaseData = {
    tabs: SavedTabData[];
};
