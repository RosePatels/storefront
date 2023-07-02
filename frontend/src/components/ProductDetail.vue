<template>
  <h1>Product Page</h1>
  <div>{{ id }}</div>
  <div>{{ product.title  }}</div>
  <div>{{ product.description }}</div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const props = defineProps(['id']);

const product = ref([]);
onMounted(async () => {
    const response = await axios.get(`/api/products/${props.id}`);
    product.value = response.data;
})

</script>

<style>

</style>