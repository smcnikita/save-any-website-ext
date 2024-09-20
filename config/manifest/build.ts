const manifest = () => {
    const version = process.env.npm_package_version;

    return {
        manifest_version: 3,
        name: '__MSG_appName__',
        description: '__MSG_appDescription__',
        default_locale: 'en',
        version,
        author: 'Nikita Semchenkov',
        homepage_url: 'https://github.com/smcnikita/simple-bookmarks-firefox',
        browser_specific_settings: {
            gecko: {
                id: 'simple.bookmarks.4321@smcnikita.ru',
            },
        },
        action: {
            default_icon: {
                '16': 'icons/icon-16.png',
                '32': 'icons/icon-32.png',
                '48': 'icons/icon-48.png',
                '128': 'icons/icon-128.png',
            },
        },
        icons: {
            '16': 'icons/icon-16.png',
            '32': 'icons/icon-32.png',
            '48': 'icons/icon-48.png',
            '128': 'icons/icon-128.png',
        },
        permissions: ['activeTab', 'storage', 'contextMenus'],
        background: {
            scripts: ['assets/service_worker.js'],
            type: 'module',
        },
        content_scripts: [
            {
                js: ['assets/content.js'],
                matches: ['<all_urls>'],
            },
        ],
    };
};

export default manifest;
