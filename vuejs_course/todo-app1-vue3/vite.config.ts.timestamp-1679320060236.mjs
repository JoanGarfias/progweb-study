// vite.config.ts
import { resolve } from "path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "file:///home/myovchev/development/apostrophe/es/todo-vue3/node_modules/vite/dist/node/index.js";
import vue from "file:///home/myovchev/development/apostrophe/es/todo-vue3/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///home/myovchev/development/apostrophe/es/todo-vue3/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/myovchev/development/apostrophe/es/todo-vue3";
var __vite_injected_original_import_meta_url = "file:///home/myovchev/development/apostrophe/es/todo-vue3/vite.config.ts";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: "/",
    plugins: [
      vue(),
      dts({
        exclude: ["node_modules"],
        skipDiagnostics: true
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    build: {
      lib: {
        entry: {
          main: resolve(__vite_injected_original_dirname, "src/index.ts")
        },
        formats: ["es", "cjs"]
      },
      rollupOptions: {
        external: ["vue"]
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9teW92Y2hldi9kZXZlbG9wbWVudC9hcG9zdHJvcGhlL2VzL3RvZG8tdnVlM1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbXlvdmNoZXYvZGV2ZWxvcG1lbnQvYXBvc3Ryb3BoZS9lcy90b2RvLXZ1ZTMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbXlvdmNoZXYvZGV2ZWxvcG1lbnQvYXBvc3Ryb3BoZS9lcy90b2RvLXZ1ZTMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCc7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpO1xuICByZXR1cm4ge1xuICAgIGJhc2U6ICcvJyxcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoKSxcbiAgICAgIGR0cyh7XG4gICAgICAgIGV4Y2x1ZGU6IFsnbm9kZV9tb2R1bGVzJ10sXG4gICAgICAgIHNraXBEaWFnbm9zdGljczogdHJ1ZSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIGxpYjoge1xuICAgICAgICBlbnRyeToge1xuICAgICAgICAgIG1haW46IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJ10sXG4gICAgICB9LFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxTQUFTLGVBQWU7QUFDaFcsU0FBUyxlQUFlLFdBQVc7QUFFbkMsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUxoQixJQUFNLG1DQUFtQztBQUFtSyxJQUFNLDJDQUEyQztBQVE3UCxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBQ3ZDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxRQUNGLFNBQVMsQ0FBQyxjQUFjO0FBQUEsUUFDeEIsaUJBQWlCO0FBQUEsTUFDbkIsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDdEQ7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsUUFDSCxPQUFPO0FBQUEsVUFDTCxNQUFNLFFBQVEsa0NBQVcsY0FBYztBQUFBLFFBQ3pDO0FBQUEsUUFDQSxTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDdkI7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
