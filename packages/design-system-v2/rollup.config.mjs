import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import postcss from "rollup-plugin-postcss";
import path from "path";
import postcssImport from "postcss-import";
import terser from "@rollup/plugin-terser";
import image from "@rollup/plugin-image";

export default {
  // TODO: Figure out regex where each directory can be a separate module without having to manually add them
  input: ["src/index.tsx"],
  output: [
    {
      dir: "build",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    postcss({
      minimize: true,
      sourceMap: true,
      plugins: [postcssImport()],
      extract: path.resolve("build/css/design-system-v2.css"),
    }),
    url(),
    svgr({
      dimensions: false,
    }),
    terser(),
    image(),
  ],
};
