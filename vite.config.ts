import fs from "fs";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
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

  plugins: [
    vue(),
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
          src: "src/assets/style.css",
          dest: "",
        },
      ],
    }),
    {
      name: "add-css-link",
      apply: "build",

      writeBundle(option, bundle) {
        const files = Object.keys(bundle)
          .filter((file) => file.endsWith(".css"))
          .map((file) => file.replace(".css", ""));

        for (const file of files) {
          const filePath = resolve("", "dist", `${file}.js`);
          const cssImport = `import "./${file.split("/")[0]}.css";`;
          const data = fs.readFileSync(filePath, { encoding: "utf8" });

          fs.writeFileSync(filePath, `${cssImport}\n${data}`);
        }
      },
    },
  ],
});
