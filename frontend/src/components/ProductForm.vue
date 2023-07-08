<template>
    <form>
            <input v-model="state.title" type="text" name="name" placeholder="Enter Product" />
            <br />
            <input v-model="state.description" type="text" name="description"  placeholder="Enter Description" />
            <br />
            <input v-model="state.color" type="color" />
            <br />
            <input v-model="state.quantity" type="number" name="quantity"  placeholder="Enter Quantity" />
            <br />
            <input v-model="state.price" type="number" name="price"  placeholder="Enter Price" />
            <br />
            <button v-if="isEdit" @click="updateProduct">Edit Product</button>
            <button v-else @click="addProduct">Add Product</button>
    </form>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "@/store/product";
import axios from "axios";

const props = defineProps(['isEdit']);
const route = useRoute();
const router = useRouter();
const productStore = useProductStore();

onMounted(async () => {
    if(props.isEdit) {
        const response = await axios.get(`/api/products/${route.params.id}`);
        state.value = response.data;
    }
})

const state = ref({
    description: "",
    title: "",
    quantity: 0,
    price: 0,
    color: "#ffffff"
})

async function addProduct(e) {
    e.preventDefault();
    await productStore.addProduct(state.value);
    resetState();
    router.push({ name: 'product-list'  });
}

async function updateProduct(e) {
    e.preventDefault();
    await productStore.updateProduct(state.value);
    router.push({ name: 'product-list' })
}

function resetState() {
    state.value.title = "";
    state.value.description = "";
    state.value.quantity = 0;
    state.value.price = 0;
}


</script>

<style>

</style>