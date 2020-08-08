import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/cart', component: '@/pages/cart' },
        { path: '/olist', component: '@/pages/olist' },
        { path: '/user', component: '@/pages/user' },
        { path: '/login', component: '@/pages/login' },
      ]
    },
  ],
});
