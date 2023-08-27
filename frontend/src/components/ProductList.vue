<template>
    <div class="product-list-container">
      <div class="product-container" v-for="(product) in productStore.products" :key="product._id">
        <router-link :to="{ name: 'product-detail', params: { id: product._id }}">
        <div class="product-background"  :style="{ 'background-color': product.color || 'grey' }">
          
        </div>
        <div class="product-info">
            <span class="product-title">{{ product.title }}</span>
            <span class="product-price">${{ product.price }}</span>
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
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.product-container {
  padding: 15px;
  background: white;
  border-radius: 5px;
}

.product-container:hover .product-background {
  opacity: .6;
}

.product-container:hover .product-title {
  font-weight: 600;
}

.product-container:hover .product-price {
  font-weight: 400;
}

.product-container a {
  text-decoration: none;
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
  padding: 10px 5px;
  color: black;
  align-items: center;
}

.product-title {
  font-size: 13px;
}

.product-price {
  font-size: 13px;
  font-weight: 600;
}

@media screen and (min-width:400px) {
  .product-list-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 700px) {
  .product-list-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 950px) {
  .product-list-container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 1200px) {
  .product-list-container {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}
</style>