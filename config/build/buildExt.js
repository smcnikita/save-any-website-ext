import webExt from 'web-ext';

const buildFolder = './dist';
const extFolder = 'zip';

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
