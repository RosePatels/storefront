import { createRouter, createWebHistory } from 'vue-router'
import ProductList from "../components/ProductList.vue";
import ProductForm from "../components/ProductForm.vue";
import ProductDetail from "../components/ProductDetail.vue";
import NotFound from "../components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product-list',
      component: ProductList,
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: ProductForm,
    },
    {
        path: '/product/:id',
        name: 'product-detail',
        component: ProductDetail,
        props: true
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFound
    }
  ],
})

export default router