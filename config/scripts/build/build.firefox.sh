#!/bin/bash

browser=firefox
d=$(dirname $0)
path_manifest_script=$d/../manifest/manifest.${browser}.sh

tsc -b &&
. $path_manifest_script &&
vite build &&
rm -rf zip/$browser &&
node config/build/build.$browser.js
