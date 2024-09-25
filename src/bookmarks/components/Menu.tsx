import { useMemo } from 'react';
import { Segmented } from 'antd';
import browser from 'webextension-polyfill';

import type { MenuItemIDs } from '@t/index';

type Props = {
    handleChange: (value: MenuItemIDs) => void;
};

type Items = {
    [key in MenuItemIDs]: {
        id: MenuItemIDs;
        name: string;
    };
};

const Menu = ({ handleChange }: Props) => {
    const items: Items = {
        input: {
            id: 'input',
            name: browser.i18n.getMessage('menu_input'),
        },
        all: {
            id: 'all',
            name: browser.i18n.getMessage('menu_all'),
        },
        archive: {
            id: 'archive',
            name: browser.i18n.getMessage('menu_archive'),
        },
    };

    const onChange = (value: string) => {
        for (const key of Object.values(items)) {
            if (key.name === value) {
                handleChange(key.id);
            }
        }
    };

    const options = useMemo<string[]>(() => {
        return [items.input.name, items.all.name, items.archive.name];
    }, [items]);

    return (
        <div>
            <Segmented<string> options={options} onChange={onChange} />
        </div>
    );
};

export default Menu;
