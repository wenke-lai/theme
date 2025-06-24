import { defineConfig } from "rollup";
// A Rollup plugin which locates modules using the Node resolution algorithm
import { nodeResolve } from "@rollup/plugin-node-resolve";
// A Rollup plugin to convert CommonJS modules to ES6, so they can be included in a Rollup bundle
import commonjs from "@rollup/plugin-commonjs";
// Use the latest JS features in your Rollup bundle
import babel from "@rollup/plugin-babel";
// Minifies the bundle
import terser from "@rollup/plugin-terser";

// CSS
// Enable the PostCSS preprocessor
import postcss from "rollup-plugin-postcss";
// Use @import to include other CSS files
import atImport from "postcss-import";
// Use the latest CSS features in your Rollup bundle
import postcssPresetEnv from "postcss-preset-env";
// Use tailwindcss
import tailwindcss from "@tailwindcss/postcss";

// Development: Enables a livereload server that watches for changes to CSS, JS, and Handlbars files
import { resolve } from "path";
import livereload from "rollup-plugin-livereload";

// Create dist folder for zip
import fs from "fs";

const copyfiles = () => {
  return {
    name: "copy-files",
    writeBundle() {
      function callback(err) {
        if (err) console.error("cp failed", err);
      }

      // fs.cp("assets/built", "dist/assets/built", { recursive: true }, callback);
      fs.cp("templates", "dist", { recursive: true }, callback);
      fs.cp("ghost-package.json", "dist/package.json", callback);

      console.info("copy success");
    },
  };
};

// Rollup configuration
export default defineConfig({
  input: "assets/js/index.js",
  output: {
    dir: "dist/assets/built",
    sourcemap: true,
    format: "iife",
    plugins: [terser()],
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    babel({ babelHelpers: "bundled" }),
    postcss({
      extract: true,
      sourceMap: true,
      plugins: [atImport(), postcssPresetEnv({}), tailwindcss()],
      minimize: true,
    }),
    process.env.BUILD !== "production" &&
      livereload({
        watch: resolve("."),
        extraExts: ["hbs"],
        exclusions: [resolve("node_modules")],
      }),
    copyfiles(),
  ],
});
