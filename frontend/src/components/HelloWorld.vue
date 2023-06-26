<template>
  <div>
    <h3>Products</h3>
    <form>
          <input v-model="state.title" type="text" name="name" placeholder="Enter Product" />
           <br />
          <input v-model="state.description" type="text" name="description"  placeholder="Enter Description" />
          <br />
          <input v-model="state.quantity" type="number" name="quantity"  placeholder="Enter Quantity" />
          <br />
          <input v-model="state.price" type="number" name="price"  placeholder="Enter Price" />
          <br />
          <button @click="addProduct">Add Product</button>
    </form>
    <div>
      <ul>
        <li v-for="(product, i) in state.products" :key="product._id">
          <div>
          <span>{{ product.title }}</span>
          <span>{{ product.description }}</span>
          <span>{{ product.quantity }}</span>
          <span>${{ product.price }}</span>
        </div>
          <button @click="removeProduct(product, i)">DELETE PRODUCT</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

    const state = ref({
      products: [],
      description: "",
      title: "",
      quantity: 0,
      price: 0
    })

  onMounted(async () => {
    const response = await axios.get("api/products/");
    state.value.products = response.data;
  })

    async function addProduct(e) {
      e.preventDefault();
      const response = await axios.post("api/products/", {
        title: state.value.title,
        description: state.value.description,
        quantity: state.value.quantity,
        price: state.value.price
      });
      state.value.products.push(response.data);
      state.value.title = "";
      state.value.description = "";
    }

    async function removeProduct(item, i) {
      await axios.delete("api/products/" + item._id);
      state.value.products.splice(i, 1);
    }
</script>

<style></style>