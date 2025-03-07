import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic' // Better for component libraries
    }),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,    // Better type merging
      outDir: 'dist/types',
      staticImport: true    // Ensure proper ESM imports
    })
  ],
  build: {
    minify: false,         // Keep readable output for verification
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ding-icons',
      formats: ['es', 'cjs'],
      fileName: (format) => 
        format === 'es' ? 'ding-icons.es.mjs' : 'ding-icons.cjs.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        preserveModules: true, // Crucial for tree-shaking
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        interop: 'auto'
      },
      treeshake: {
        preset: 'recommended',
        moduleSideEffects: false
      }
    }
  }
})