<template>
  <div id="nav">
    <router-link :to="{ name: 'product-list' }"> Home</router-link>
    <router-link v-if="isLoggedIn" :to="{ name: 'add-product' }">Add New Product</router-link>
    <router-link v-if="!isLoggedIn" :to="{ name: 'signup' }">Sign Up</router-link>
    <router-link v-if="!isLoggedIn" :to="{ name: 'login' }">Login</router-link>
    <router-link v-if="isLoggedIn" @click="userAuth.logout" :to="{ name: 'login' }">Logout</router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useUserAuthStore } from '@/store/userAuth';

const userAuth = useUserAuthStore();
const isLoggedIn = computed(() => userAuth.loggedIn);
</script>

<style>

</style>