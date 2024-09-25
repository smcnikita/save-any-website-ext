const manifest = () => {
    const version = process.env.npm_package_version;
    const browser = process.env.BROWSER;

    console.log('Browser - ', browser);

    const browser_specific_settings =
        browser === 'firefox'
            ? {
                  browser_specific_settings: {
                      gecko: {
                          id: 'simple.bookmarks.4321@smcnikita.ru',
                      },
                  },
              }
            : {};

    const background =
        browser === 'firefox'
            ? {
                  background: {
                      scripts: ['assets/service_worker.js'],
                      type: 'module',
                  },
              }
            : {
                  background: {
                      service_worker: 'assets/service_worker.js',
                      type: 'module',
                  },
              };

    return {
        manifest_version: 3,
        name: '__MSG_appName__',
        description: '__MSG_appDescription__',
        default_locale: 'en',
        version,
        author: 'Nikita Semchenkov',
        homepage_url: 'https://github.com/smcnikita/simple-bookmarks-firefox',
        ...browser_specific_settings,
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
        ...background,
        content_scripts: [
            {
                js: ['browser-polyfill.min.js', 'assets/content.js'],
                matches: ['<all_urls>'],
            },
        ],
        options_ui: {
            page: 'options.html',
            open_in_tab: false,
        },
    };
};

export default manifest;
