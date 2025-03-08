import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig(async () => {
  // const { viteStaticCopy } = await import('vite-plugin-static-copy')

  return {
    plugins: [
      react({
        jsxRuntime: 'classic'
      }),
      dts({
        insertTypesEntry: true,
        rollupTypes: true,
        outDir: 'dist/types',
        // include: ['src/generated/**/*', 'src/context/DingIconProvider.tsx']
        include: ['src/**/*']
      }),
    ],
    build: {
      minify: false,
      sourcemap: true,
      lib: {
        entry: [
          path.resolve(__dirname, 'src/context/DingIconProvider.tsx'),
          path.resolve(__dirname, 'src/generated/index.ts'),
          path.resolve(__dirname, 'src/index.ts')
        ],
        name: 'ding-icons',
        formats: ['es', 'cjs'],
        fileName: (format) => `${format}/[name]`
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          entryFileNames: ({ name }) => {
            // console.log(">>>name", name)
            if (name === 'DingIconProvider') return 'context/[name].js'
            // if (name.includes('icons')) return 'icons/[name].js'
            return '[name].js'
          },
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        },
        treeshake: {
          preset: 'recommended',
          moduleSideEffects: (id) => {
            // Preserve CSS side effects
            return /\.[cm]?css$/.test(id)
          }
        }
      }
    }
  }
})