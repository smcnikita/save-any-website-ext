![image](/public/icons/icon-fill-48.png)

# Save any website

## Install

### Firefox

-   [Mozilla Addons](https://addons.mozilla.org/ru/firefox/addon/save-any-website).

### Chromium

Export saved bookmarks when updating the version.

1. Download ZIP file from [Releases page](https://github.com/smcnikita/save-any-website-ext/releases).
2. Open your browser's extension manager, you can find it at this link: `chrome://extensions`
3. Activate developer mode
4. Reload the extension manager page to avoid errors
5. Drag and drop folder into the extension manager

## Build

### Versions

`Node.js: ^20`

### Steps

```bash
npm install
```

```bash
npm run build
```

#### Build only Firefox version

```bash
npm run build:firefox
```

#### Build only Chromium version

```bash
npm run build:chrome
```
