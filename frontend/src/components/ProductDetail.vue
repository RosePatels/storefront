<template>
  <h1>Product Page</h1>
  <div>{{ id }}</div>
  <div>{{ product.title  }}</div>
  <div>{{ product.description }}</div>
  <button @click="cartStore.addToCart(product)">Add to Cart</button>
  <router-link :to="{ name: 'edit-product', params: { id: product._id } }">
    <button v-if="isLoggedIn">Edit</button>
  </router-link>
  <button v-if="isLoggedIn" @click="removeProduct">Delete</button>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useProductStore } from "@/store/product";
import { useRouter } from "vue-router";
import { useUserAuthStore } from "@/store/userAuth";
import { useCartStore } from "@/store/cart";

const props = defineProps(['id']);
const productStore = useProductStore();
const router = useRouter();
const userAuth = useUserAuthStore();
const cartStore = useCartStore();

const product = ref([]);
const isLoggedIn = computed(() => userAuth.loggedIn);

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