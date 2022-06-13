import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import postcss from "rollup-plugin-postcss";
import path from "path";
import postcssImport from "postcss-import";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
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
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      minimize: true,
      sourceMap: true,
      plugins: [postcssImport()],
      extract: path.resolve("build/css/design-system.css"),
    }),
    url(),
    svgr(),
  ],
};
