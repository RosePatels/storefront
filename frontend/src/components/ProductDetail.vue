<template>
  <h1>Product Page</h1>
  <div>{{ id }}</div>
  <div>{{ product.title  }}</div>
  <div>{{ product.description }}</div>
  <router-link :to="{ name: 'edit-product', params: { id: product._id } }">
    <button>Edit</button>
  </router-link>
  <button @click="removeProduct">Delete</button>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useProductStore } from "@/store/product";
import { useRouter } from "vue-router";

const props = defineProps(['id']);
const productStore = useProductStore();
const router = useRouter();

const product = ref([]);
onMounted(async () => {
    const response = await axios.get(`/api/products/${props.id}`);
    product.value = response.data;
})

async function removeProduct() {
  await productStore.deleteProduct(product.value._id);
  router.push({ name: 'product-list' });
}

</script>

<style>

</style>