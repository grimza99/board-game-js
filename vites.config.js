import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // index.html 위치 수정후 경로 설정
  build: {
    outDir: "dist",
  },
});
