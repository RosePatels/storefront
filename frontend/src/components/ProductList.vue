<template>
    <div class="product-list-container">
      <div class="product-container" v-for="(product) in productStore.products" :key="product._id">
        <router-link :to="{ name: 'product-detail', params: { id: product._id }}">
        <div class="product-background"  :style="{ 'background-color': product.color || 'grey' }">
          
        </div>
        <div class="product-info">
            <span>{{ product.title }}</span>
            <span>${{ product.price }}</span>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductStore } from "@/store/product";
  const productStore = useProductStore();

  onMounted(async () => {
    await productStore.fetchProducts();
  })

</script>

<style scoped>
.product-list-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
}

.product-container {
  padding: 15px;
  background: white;
  box-shadow: 5px 5px 5px #f0eeee;
  border-radius: 5px;
}
.product-background {
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 125px;
  border-radius: 3px;
}

.product-info {
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
}

</style>