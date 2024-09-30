import webExt from 'web-ext';

const browser = process.env.BROWSER;

const isChromium = browser === 'chrome';

const buildFolder = './dist';
const extFolder = isChromium ? 'zip/chrome' : 'zip/firefox';
const filename = isChromium ? 'chromium.zip' : 'firefox.xpi';

webExt.cmd.build(
    {
        sourceDir: buildFolder,
        artifactsDir: extFolder,
        overwriteDest: true,
        filename: `{name}_{version}_${filename}`,
    },
    {
        shouldExitProgram: false,
    }
);
