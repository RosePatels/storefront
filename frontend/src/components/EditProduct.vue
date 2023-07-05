<template>
  <h2>Edit Product</h2>
  <h2>{{$route.params.id}}</h2>
  <ProductForm />
</template>

<script setup>
import ProductForm from "./ProductForm.vue";
</script>

<style>

</style>