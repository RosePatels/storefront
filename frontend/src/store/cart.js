import { defineStore } from 'pinia'
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([]);

  const addToCart = (product) => {
    const hasProduct = cartItems.value.find(it => it.product._id === product._id);
    if(hasProduct) {
        hasProduct.quantity += 1;
    } else {
        cartItems.value.push({ product, quantity: 1 });
    }
  }

  const removeFromCart = (productId) => {
    cartItems.value = cartItems.value.filter(it => it.product._id !== productId);
  }

  return {
    cartItems,
    addToCart,
    removeFromCart
  }
})