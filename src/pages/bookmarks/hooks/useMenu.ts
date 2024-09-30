import { useState } from 'react';
import type { MenuItemIDs } from '@t/index';

const DEFAULT: MenuItemIDs = 'input';

const useMenu = () => {
    const [menuID, setMenuID] = useState<MenuItemIDs>(DEFAULT);

    const updateMenuID = (value: MenuItemIDs) => {
        setMenuID(value);
    };

    return { menuID, updateMenuID };
};

export default useMenu;
