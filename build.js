import webExt from 'web-ext';
import path from 'path';

buildTheme();

function buildTheme() {
    const FOLDER_PATH = path.resolve('./dist');
    const ARTIFACTS_DIR = path.resolve('zip/firefox');

    webExt.cmd.build(
        {
            sourceDir: FOLDER_PATH,
            artifactsDir: ARTIFACTS_DIR,
            overwriteDest: true,
        },
        {
            shouldExitProgram: false,
        }
    );
}
