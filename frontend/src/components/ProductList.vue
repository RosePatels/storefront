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
    <div class="product-list-container">
      <div class="product-container" v-for="(product) in state.products" :key="product._id">
        <div class="product-background">
          test
        </div>
        <div class="product-info">
            <span>{{ product.title }}</span>
            <span>${{ product.price }}</span>
          </div>
          <!-- <button @click="removeProduct(product, i)">DELETE PRODUCT</button> -->

      </div>
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