// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import svgr from '@svgr/rollup';
// import postcss from 'rollup-plugin-postcss';
// import autoprefixer from "autoprefixer";
import copy from 'rollup-plugin-copy';

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
                name: 'react-lib'
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            terser(),
            svgr(),
            // postcss({
            //     exec: false,
            //     extensions: ['.css'],
            //     // extract: 'sushi-bootstrap.css', // Specify the output CSS file nam
            //     minimize: true,
            //     plugins: [autoprefixer()],
            //     use: ['sass'],
            // }),
            copy({
                targets: [
                    {src: 'src/sushi-bootstrap.scss', dest: 'dist/scss'}, // Copy SCSS file to dist
                    {src: 'src/sushi-class.scss', dest: 'dist/scss'}, // Copy CSS file to dist
                ],
            }),
        ],
        external: ["react", "react-dom", "react-bootstrap", 'lodash', "/(\\.scss|\\.css)$/"],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{file: "dist/index.d.ts", format: "esm"}],
        plugins: [dts.default()],
        external: [/\.(css|less|scss)$/],
    },
];
