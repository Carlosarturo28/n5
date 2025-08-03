import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pokemon",
      filename: "remoteEntry.js",
      exposes: {
        "./CharacterList": "./src/components/PokemonList/PokemonList.jsx",
      },
      shared: ["react", "react-i18next", "i18next"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
