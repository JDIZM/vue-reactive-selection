// https://vitejs.dev/config/
const { createVuePlugin } = require("vite-plugin-vue2");
import { join } from "path";

module.exports = {
  plugins: [createVuePlugin(/*options*/)],
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
};
