import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // GitHub Pages deployment base path
  base: '/portfolio/',
  
  // Build optimizations
  build: {
    // Target modern browsers for smaller bundle size
    target: 'esnext',
    // Minify options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
    // CSS code splitting
    cssCodeSplit: true,
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        // Optimize chunk file names
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|gif|svg|webp|avif/.test(ext)) {
            return `images/[name]-[hash][extname]`;
          } else if (/woff|woff2|eot|ttf|otf/.test(ext)) {
            return `fonts/[name]-[hash][extname]`;
          } else if (ext === 'css') {
            return `css/[name]-[hash][extname]`;
          }
          return `[name]-[hash][extname]`;
        },
        manualChunks: {
          vendor: ['react', 'react-dom'],
          emailjs: ['@emailjs/browser'],
          icons: ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome'],
          lucide: ['lucide-react'],
        },
      },
    },
    // Report compressed sizes
    reportCompressedSize: true,
    // Generate source maps for production (set to false for smaller builds)
    sourcemap: false,
    // Chunk size warning limit (in kbs)
    chunkSizeWarningLimit: 1000,
    // Rollup output options
    outputDir: 'dist',
    assetsDir: 'assets',
  },
  
  // Server configuration
  server: {
    port: 3000,
    host: true,
    strictPort: false,
  },
  
  // Preview configuration
  preview: {
    port: 4173,
    host: true,
    strictPort: false,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@emailjs/browser',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/react-fontawesome',
      'lucide-react',
    ],
    exclude: ['@vite/plugin-react'],
  },
})

