import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: '/index.html',
        about: '/about.html',
        blog: '/blog.html',
        contact: '/contact.html',
        price: '/price.html',
        project: '/project.html',
        services: '/services.html',
        team: '/team.html',
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
    assetsInclude: [
      './public/**/*.css',
      './public/**/*.ttf', 
    ],
  },
});
