<template>
    <form class="product-form">
            <label>Title: </label>
            <input v-model="state.title" type="text" name="name" placeholder="Enter Product" :class="{ 'input-error': v$.title.$error }" />
            <div :class="{ error: v$.title.$errors.length }">
                <div class="input-errors" v-for="error of v$.title.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </div>
            <label>Description:</label>
            <input v-model="state.description" type="text" name="description"  placeholder="Enter Description" />
            <label>Color (temp placeholder for images): </label>
            <input v-model="state.color" type="color" class="color-picker" />
            <label>Quantity: </label>
            <input v-model="state.quantity" type="number" name="quantity"  placeholder="Enter Quantity" />
            <label>Price: </label>
            <input v-model="state.price" type="number" name="price"  placeholder="Enter Price" />
            <button v-if="isEdit" @click="updateProduct" class="submit-button">Edit Product</button>
            <button v-else @click="addProduct" class="submit-button">Add Product</button>
    </form>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "@/store/product";
import axios from "axios";
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

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

const rules = {
    title: { required },
}

const v$ = useVuelidate(rules, state);

async function addProduct(e) {
    e.preventDefault();
    const isFormCorrect = await v$.value.$validate()
    if (!isFormCorrect) return
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

<style scoped>
.input-errors {
    color: red;
    font-size: 10px;
    padding-left: 5px;
    padding-bottom: 5px;
}

.input-error {
    border-bottom: 1px solid red;
}

.product-form {
    display: flex;
    flex-direction: column;
    padding: 5px;
}

label {
    font-size: 14px;
    padding: 5px;
}

input {
    border: none;
    border-bottom: 1px solid #dddddd;
    padding: 5px;
    margin: 10px 0;
}

.color-picker {
    padding: 0;
}

.submit-button {
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

.submit-button:hover {
    background: black;
    color: white;
    transition: all .05s linear;
}

</style>