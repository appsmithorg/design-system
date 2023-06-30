import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import path from "path";
import { terser } from "rollup-plugin-terser";
import image from "@rollup/plugin-image";
import postcssModules from "rollup-plugin-postcss-modules";
import postcssImport from "postcss-import";

export default {
  // TODO: Figure out regex where each directory can be a separate module without having to manually add them
  input: ["src/index.ts"],
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
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    postcssModules({
      extract: path.resolve("build/css/design-system.css"),
      minimize: true,
      modules: true,
      sourceMap: true,
      plugins: [postcssImport()],
      writeDefinitions: true,
    }),
    url(),
    svgr({
      dimensions: false,
    }),
    terser(),
    image(),
  ],
};
