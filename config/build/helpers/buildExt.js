import webExt from 'web-ext';

export function buildExt(browser = 'firefox') {
    const buildFolder = './dist';
    const extFolder = `zip/${browser}`;

    webExt.cmd.build(
        {
            sourceDir: buildFolder,
            artifactsDir: extFolder,
            overwriteDest: true,
        },
        {
            shouldExitProgram: false,
        }
    );
}
