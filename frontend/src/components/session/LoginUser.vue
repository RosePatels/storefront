<template>
    <div class="login-page-container">
        <div class="login-container">
            <h2 class="login-header">LOG IN</h2>
            <input v-model="state.email" type="email" name="email" class="input-email" placeholder="Enter email" :class="{ 'input-error': v$.email.$error }" />
            <div :class="{ error: v$.email.$errors.length }">
                <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                    <small class="error-msg">{{ error.$message }}</small>
                </div>
            </div>
            <input v-model="state.password" type="password" name="password" class="input-password"  placeholder="Enter password" :class="{ 'input-error': v$.password.$error }" />
            <div :class="{ error: v$.password.$errors.length }">
                <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                    <small class="error-msg">{{ error.$message }}</small>
                </div>
            </div>
            <button class="login-button" @click="login">LOG IN</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useRouter } from "vue-router";
import { useUserAuthStore } from "@/store/userAuth";

const router = useRouter();
const userAuth = useUserAuthStore();

const state = ref({
  email: "",
  password: ""
})

const rules = {
  email: { required, email },
  password: { required }
}

const v$ = useVuelidate(rules, state);

async function login(e) {
  e.preventDefault();
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return
  await userAuth.login(state.value);
  resetState();
  router.push({ name: 'product-list' });
}

function resetState() {
  state.value.email = "";
  state.value.password = "";
}

onMounted(() => {
	if(userAuth.loggedIn) {
		router.push({ name: 'product-list' })
	}
})

</script>

<style scoped>

.login-page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 47px);
}

.login-container {
    padding: 30px 25px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 40px;
    width: 200px;
    border: 1px solid #ededed;
}

.login-header {
    font-size: 15px;
    text-align: center;
    padding: 10px;
    margin-bottom: 10px;
    font-weight: 300;
}

.input-email,
.input-password {
    border: none;
    border-bottom: 1px solid #dddddd;
    padding: 5px;
    margin: 10px 0;
}

.login-button {
    margin: 20px 0 10px 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    background: #f1f1f1;
    color: black;
}

.login-button:hover {
    background: black;
    color: white;
    transition: all .05s linear;
}

.input-errors {
	color: red;
    font-size: 10px;
    padding-left: 5px;
}

.input-error {
	border-bottom: 1px solid red;
}

</style>