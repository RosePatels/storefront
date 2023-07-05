import { createRouter, createWebHistory } from 'vue-router'
import ProductList from "../components/ProductList.vue";
import AddProduct from "../components/AddProduct.vue";
import EditProduct from "../components/EditProduct.vue";
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
      component: AddProduct,
    },
    {
        path: '/edit-product/:id',
        name: 'edit-product',
        component: EditProduct
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