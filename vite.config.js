// vite.config.js
export default {
    base: "/",
    build: {
      outDir: 'dist', // Specify the output directory for production builds
      manifest: true, // Generate manifest.json for PWA support
      rollupOptions: {
        // Any additional Rollup options if needed
      },
    },
  };
  