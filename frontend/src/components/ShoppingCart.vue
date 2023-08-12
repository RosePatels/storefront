<template>
  <h2>Cart</h2>
  <div v-for="cartItem in cartStore.cartItems" :key="cartItem.id">
    <div>{{ cartItem.product.title  }}</div>
    <div>{{ cartItem.product.description  }}</div>
    <div>{{ cartItem.product.price  }}</div>
    <div>Quantity: {{ cartItem.quantity }}</div>
    <button @click="cartStore.removeFromCart(cartItem.product._id)">Remove Item</button>
  </div>
  <div>Total: {{  getTotal }}</div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';
import { computed } from "vue";

const cartStore = useCartStore()

const getTotal = computed(() => cartStore.cartItems.reduce((acc, it) => acc + (it.product.price * it.quantity), 0))

</script>

<style>

</style>