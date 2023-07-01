<template>
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
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const state = ref({
    description: "",
    title: "",
    quantity: 0,
    price: 0
})

async function addProduct(e) {
    e.preventDefault();
    await axios.post("api/products/", {
        title: state.value.title,
        description: state.value.description,
        quantity: state.value.quantity,
        price: state.value.price
    });
    // state.value.products.push(response.data);
    state.value.title = "";
    state.value.description = "";
}
</script>

<style>

</style>