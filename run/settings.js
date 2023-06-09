import fs from 'fs';
import path from 'path';
import postCssPlugin from './esbuild-plugins/esbuild-pcss-plugin.js';

const packageJson = fs.readFileSync(path.join(process.cwd(), './package.json'), 'utf-8');
let version = '1.0.0';

try {
    const parsed = JSON.parse(packageJson);
    version = parsed.version;
} catch (ex) {}

export const settings = {
    // entryPoints: ['./src/main/index.ts'],
    format: 'esm',
    bundle: true,
    sourcemap: 'linked', // external
    minify: true,
    target: ['es6'],
    // outfile: './dist/darkly.min.js',
    plugins: [postCssPlugin],
    banner: {
        js: `/* 
Darkly v${ version } 
Dark React Starter Template + UI Kit
https://github.com/mzusin/darkly
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md   
Copyright (c) 2023-present, Miriam Zusin              
*/`,
    },
};