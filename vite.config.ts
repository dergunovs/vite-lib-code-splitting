import fs from "fs";
import path from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { defineConfig } from "vite";

const files = fs.readdirSync("./src/components").filter((file) => file.includes("Ui"));

const components = files.reduce((obj, component) => {
  obj[component.split(".")[0]] = `src/components/${component}/${component}.vue`;

  return obj;
}, {});

export default defineConfig({
  build: {
    target: "esnext",
    cssCodeSplit: true,
    copyPublicDir: false,
    lib: { entry: components, formats: ["es"] },
    rollupOptions: {
      external: ["vue"],
      output: {
        entryFileNames: `[name]/[name].js`,
        assetFileNames: `[name]/[name].[ext]`,
        globals: { vue: "Vue" },
      },
    },
  },

  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },

  plugins: [
    vue(),
    cssInjectedByJsPlugin({ relativeCSSInjection: true }),
    dts({ entryRoot: "./src/components", cleanVueFileName: true }),
    viteStaticCopy({
      targets: [
        {
          src: "src/components/index.js",
          dest: "",
          transform: (contents) => contents.toString().replace(/.vue/g, ""),
        },
        {
          src: "src/components/index.js",
          dest: "",
          rename: "index.d.ts",
          transform: (contents) => contents.toString().replace(/.vue/g, ""),
        },
        {
          src: "src/components/interface/index.ts",
          dest: "interface",
        },
        {
          src: "src/assets/style.css",
          dest: "",
          rename: "style.css",
        },
      ],
    }),
  ],
});
