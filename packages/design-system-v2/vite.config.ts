import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";
import { resolve } from "path";

import { peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    outDir: "build",
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },

    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      plugins: [
        typescript({
          tsconfig: "./tsconfig.json",
        }),
      ],
      output: {
        assetFileNames: ({ name = "" }) => {
          /**
           * Vite produces a single file style.css
           * move it to the css folder in the build
           */
          if (name === "style.css") {
            return "css/design-system-v2.css";
          }
          return name;
        },
        globals: {
          react: "React",
          "react-dom": "ReactDom",
        },
      },
    },
  },
});
