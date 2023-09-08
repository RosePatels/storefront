<template>
  <h2 class="product-form-header">Edit Product</h2>
  <div class="product-form-container">
    <ProductForm :isEdit="true" />
  </div>
</template>

<script setup>
import ProductForm from "./ProductForm.vue";
</script>

<style scoped>
.product-form-header {
  text-align: center;
  text-transform: uppercase;
  padding: 30px 0;
}

.product-form-container {
  max-width: 700px;
  margin: 0 auto;
}

</style>