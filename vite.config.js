// vite.config.js
export default {
    base: "/",
    build: {
      outDir: 'dist', // Specify the output directory for production builds
      manifest: true, // Generate manifest.json for PWA support
      rollupOptions: {
        main: './index.html', // Specify your main HTML file
        about: './pages/about.html', // Add about.html to input if not included automatically
      },
    },
  };
  