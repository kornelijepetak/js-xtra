import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
    plugins: [
        dts({
            insertTypesEntry: true,
            exclude: ["src/tests/**/*", "**/*.test.ts", "**/*.spec.ts"],
        }),
    ],
    build: {
        lib: {
            entry: "src/index.ts",
            fileName: "index",
            formats: ["es"],
        },
        rollupOptions: {
            external: [],
        },
    },
})
