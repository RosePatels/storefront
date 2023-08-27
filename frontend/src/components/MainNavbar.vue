<template>
  <nav id="nav">
    <div class="nav-logo"><router-link :to="{ name: 'product-list' }">Storefront</router-link></div>
    <ul class="nav-links">
      <li>
        <router-link :to="{ name: 'product-list' }"> Home</router-link>
      </li>
      <li v-if="isLoggedIn">
        <router-link :to="{ name: 'add-product' }">Add New Product</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'cart' }">Cart  ({{ cart.cartItems.length }})</router-link>
      </li>
      <li v-if="!isLoggedIn">
        <router-link :to="{ name: 'signup' }">Sign Up</router-link>
      </li>
      <li v-if="!isLoggedIn">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li v-if="isLoggedIn">
        <router-link @click="userAuth.logout" :to="{ name: 'login' }">Logout</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useUserAuthStore } from '@/store/userAuth';
import { useCartStore } from "@/store/cart";

const userAuth = useUserAuthStore();
const cart = useCartStore();
const isLoggedIn = computed(() => userAuth.loggedIn);
</script>

<style>
#nav {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #dddddd;
}

.nav-logo {
  font-weight: 700;
  padding: 5px 10px;
}

.nav-logo a {
  text-decoration: none;
  color: black;
}

.nav-links {
  display: flex;
  padding-right:
}

.nav-links li {
  padding: 5px 10px 5px 0;
}

.nav-links li:hover a {
  font-weight: 700;
}

.nav-links li a {
  font-weight: 500;
  text-decoration: none;
  color: black;
  font-size: 14px;
}
</style>