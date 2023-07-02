<template>
    <div class="product-list-container">
      <div class="product-container" v-for="(product) in products" :key="product._id">
        <router-link :to="{ name: 'product-detail', params: { id: product._id }}">
        <div class="product-background">
          test
        </div>
        <div class="product-info">
            <span>{{ product.title }}</span>
            <span>${{ product.price }}</span>
          </div>
          <!-- <button @click="removeProduct(product, i)">DELETE PRODUCT</button> -->

        </router-link>
      </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
  const products = ref([]);
  onMounted(async () => {
    const response = await axios.get("api/products/");
    products.value = response.data;
  })

    // async function removeProduct(item, i) {
    //   await axios.delete("api/products/" + item._id);
    //   state.value.products.splice(i, 1);
    // }
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