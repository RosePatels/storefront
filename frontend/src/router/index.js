import { createRouter, createWebHistory } from 'vue-router'
import ProductList from "../components/ProductList.vue";
import ProductForm from "../components/ProductForm.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product-list',
      component: ProductList,
    },
    // {
    //   path: '/event/:id',
    //   name: 'event-details',
    //   props: true,
    //   component: EventDetailsView,
    // },
    {
      path: '/add-product',
      name: 'add-product',
      component: ProductForm,
    },
  ],
})

export default router