import { defineConfig } from "@solidjs/start/config";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";

const { default: mdx } = pkg;
export default defineConfig({
  extensions: ["mdx", "md"],
  vite: {

    optimizeDeps: {
      exclude: ['proyecto-viviana-ui']
    },
    plugins: [
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx"
      })
    ]
  }
});
