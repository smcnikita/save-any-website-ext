#!/bin/bash

browser=firefox
dist=public/manifest.json

rm -rf $dist &&
cp config/manifest/manifest.$browser.json $dist
