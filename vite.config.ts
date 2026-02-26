import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // Diz ao Vite que o projeto frontend está em /client
  root: path.resolve(__dirname, "client"),
   envDir: __dirname, // inserir esta linha para garantir que as variáveis de ambiente sejam lidas do diretório raiz
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },

  build: {
    // outDir SEM path absoluto
    // sempre relativo ao `root`
    outDir: "dist",
    emptyOutDir: true,
  },
});
