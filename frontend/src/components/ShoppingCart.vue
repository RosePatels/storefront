<template>
  <div v-if="cartStore.cartItems.length > 0" class="cart-page-container">
    <h2 class="cart-header">YOUR CART</h2>
    <div class="cart-container">
      <div>
        <div v-for="cartItem in cartStore.cartItems" :key="cartItem.id" class="cart-item-container">
           <div class="item-background"  :style="{ 'background-color': cartItem.product.color || 'grey' }">
          </div>
          <div>
            <div class="first-row cart-item-row">
              <div class="cart-item-title">{{ cartItem.product.title  }}</div>
              <div>${{ cartItem.product.price  }}</div>
            </div>
            <div class="cart-item-row row-desc">{{ cartItem.product.description  }}</div>
            <div class="cart-item-row">
              <div>Quantity: {{ cartItem.quantity }}</div>
              <button class="remove-button" @click="cartStore.removeFromCart(cartItem.product._id)">Remove Item</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="bill-container">
          <div class="bill-title">ORDER</div>
          <div class="price-item-row">
            <div>Cart Total:</div>
            <div>${{ getTotal }}</div>
          </div>
          <div class="price-item-row">
            <div>Shipping:</div>
            <div>$15</div>
          </div>
          <div class="final-row price-item-row">
            <div>Final Total:</div>
            <div>${{ getTotal + 15 }}</div>
          </div>
        </div>
        <button class="checkout-button">CHECKOUT</button>
      </div>
    </div>
  </div>
  <div v-else class="empty-cart">CART IS EMPTY</div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';
import { computed } from "vue";

const cartStore = useCartStore()

const getTotal = computed(() => cartStore.cartItems.reduce((acc, it) => acc + (it.product.price * it.quantity), 0))

</script>

<style scoped>
.cart-page-container {
  padding: 30px;
  max-width: 850px;
  margin: 0 auto;
}

.cart-header {
  text-align: center;
}

.cart-container {
  margin-top: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 225px;
  grid-gap: 10px;
}

.cart-item-container {
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 15px;
  margin-right: 30px;
}

.item-background {
  height: 150px;
  width: 200px;
}

.cart-item-row {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  font-size: 14px;
}

.first-row {
  padding-top: 20px;
}


.cart-item-title {
  font-weight: 700;
}
.row-desc {
  font-weight: 300;
}

.bill-title {
  font-size: 14px;
  padding-bottom: 5px;
  font-weight: 500;
}

.bill-container {
  background: #f6f6f6;
  padding: 20px 15px;
  border-radius: 5px;
}

.price-item-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  font-size: 12px;
}

.final-row {
  border-top: 1px solid #d2d2d2;
  font-weight: 500;
}

.remove-button {
    border: none;
    cursor: pointer;
    background: white;
    color: black;
    text-decoration: underline;
}

.checkout-button {
    margin: 20px 0 10px 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    background: #f5f5f5;
    color: black;
    width: 100%;
}

.checkout-button:hover {
    background: black;
    color: white;
    transition: all .05s linear;
}

.empty-cart {
  text-align: center;
  padding-top: 50px;
}

@media screen and (max-width: 600px) {
  .cart-container {
    grid-template-columns: 1fr;
  }
}

</style>