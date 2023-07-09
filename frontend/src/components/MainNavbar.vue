<template>
  <div id="nav">
    <router-link :to="{ name: 'product-list' }"> Home</router-link>
    <router-link :to="{ name: 'add-product' }">Add New Product</router-link>
    <router-link :to="{ name: 'signup' }">Sign Up</router-link>
    <router-link :to="{ name: 'login' }">Login</router-link>
  </div>
</template>

<script setup>

</script>

<style>

</style>