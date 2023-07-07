import { defineStore } from 'pinia'
import { ref } from "vue";
import axios from "axios";

export const useProductStore = defineStore('product', () => {
  const products = ref([]);

  const fetchProducts = async () => {
    const response = await axios.get("api/products/");
    products.value = response.data
  }

 const addProduct = async (formData) => {
    const response = await axios.post("api/products", formData);
    products.value.push(response.data);
 }

const updateProduct = async (formData) => {
    const prodIdx = products.value.findIndex(prod => prod._id === formData._id);
    await axios.patch(`/api/products/${formData._id}`, formData);
    if(prodIdx > -1) {
        products.value[prodIdx] = formData
    }
}


const deleteProduct = async (id) => {
    const prodIdx = products.value.findIndex(prod => prod._id === id);
    await axios.delete(`/api/products/${id}`);
    products.value.splice(prodIdx, 1);
}

  return {
    products,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct
  }
})