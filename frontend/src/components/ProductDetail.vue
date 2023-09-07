<template>
  <div class="product-page-container">
    <div>
      <div class="product-background"  :style="{ 'background-color': product.color || 'grey' }">
      </div>
    </div>
    <div class="product-info">
      <div>
        <div class="product-title">{{ product.title }}</div>
        <div class="product-price">${{ product.price  }}</div>
        <div class="product-description">{{ product.description  }}</div>
        <div class="buttons-container">
          <router-link :to="{ name: 'edit-product', params: { id: product._id } }">
            <button v-if="isLoggedIn" class="product-update-button">Edit</button>
          </router-link>
          <button v-if="isLoggedIn" @click="removeProduct" class="product-update-button">Delete</button>
        </div>
      </div>
      <button @click="cartStore.addToCart(product)" class="checkout-button">Add to Cart</button>
    </div>
  </div>
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

<style scoped>

.product-page-container {
  display: grid;
  grid-template-columns: 60fr 40fr;
  grid-gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 20px;
}
.product-background {
  height: 400px;
  width: 100%;
}

.product-info-container {
  padding: 20px;
}

.product-title {
  font-weight: 700;
  text-transform: uppercase;
  padding: 20px 0;
  font-size: 18px;
}

.product-price {
  font-weight: 700;
  padding-bottom: 20px;
  font-size: 15px;
}

.product-description {
  font-size: 13px;
  font-weight: 300;
  padding-bottom: 20px;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
}

.product-update-button {
    border: none;
    cursor: pointer;
    background: white;
    color: black;
    text-decoration: underline;
    padding: 0;
}

.checkout-button {
    margin: 20px 0 10px 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    background: #f1f1f1;
    color: black;
    width: 100%;
}

.checkout-button:hover {
    background: black;
    color: white;
    transition: all .05s linear;
}

@media screen and (max-width: 850px) {
  .product-page-container {
    grid-template-columns: 1fr;
    margin-top: 0;
  }
}


</style>