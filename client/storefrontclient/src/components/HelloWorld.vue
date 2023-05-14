<template>
  <div>
    <h3>Products</h3>
    <form>
          <input v-model="title" type="text" name="name" placeholder="Enter Product" />
           <br />
          <input v-model="description" type="text" name="description"  placeholder="Enter Description" />
          <br />
          <input v-model="quantity" type="number" name="quantity"  placeholder="Enter Quantity" />
          <br />
          <input v-model="price" type="number" name="price"  placeholder="Enter Price" />
          <br />
          <button @click="addProduct">Add Product</button>
    </form>
    <div>
      <ul>
        <li v-for="(product, i) in products" :key="product._id">
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

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      products: [],
      description: "",
      title: "",
      quantity: 0,
      price: 0
    };
  },
  async mounted() {
    const response = await axios.get("api/products/");
    this.products = response.data;
  },
  methods: {
    async addProduct(e) {
      e.preventDefault();
      const response = await axios.post("api/products/", {
        title: this.title,
        description: this.description,
        quantity: this.quantity,
        price: this.price
      });
      this.products.push(response.data);
      this.title = "";
      this.description = "";
    },
    async removeProduct(item, i) {
      await axios.delete("api/products/" + item._id);
      this.products.splice(i, 1);
    },
  }
};
</script>

<style></style>