import { createRouter, createWebHistory } from 'vue-router'
import ProductList from "../components/ProductList.vue";
import AddProduct from "../components/AddProduct.vue";
import EditProduct from "../components/EditProduct.vue";
import ProductDetail from "../components/ProductDetail.vue";
import NotFound from "../components/NotFound.vue";
import SignUp from "../components/session/SignUp.vue";
import LoginUser from "../components/session/LoginUser.vue";
import ShoppingCart from "../components/ShoppingCart.vue";

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
      meta: {  
        requiresAuth: true
      }
    },
    {
        path: '/edit-product/:id',
        name: 'edit-product',
        component: EditProduct,
        meta: {
          requiresAuth: true
        }
    },
    {
        path: '/product/:id',
        name: 'product-detail',
        component: ProductDetail,
        props: true,
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFound
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/login',
        name: 'login',
        component: LoginUser
    },
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCart
    }
  ],
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('jwtToken');
  if(to.meta.requiresAuth && !loggedIn) {
    next('/login')
  } else {
    next();
  }
});

export default router