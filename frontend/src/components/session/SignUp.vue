<template>
  <h2>Sign Up</h2>
	<div :class="{ error: v$.username.$errors.length }">
			<div class="input-errors" v-for="error of v$.username.$errors" :key="error.$uid">
					<div class="error-msg">{{ error.$message }}</div>
			</div>
	</div>
	<input v-model="state.username" type="text" name="username"  placeholder="Enter username" :class="{ 'input-error': v$.username.$error }" />

	<div :class="{ error: v$.email.$errors.length }">
			<div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
					<div class="error-msg">{{ error.$message }}</div>
			</div>
	</div>
	<input v-model="state.email" type="email" name="email"  placeholder="Enter email" :class="{ 'input-error': v$.email.$error }" />

	<div :class="{ error: v$.password.$errors.length }">
			<div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
					<div class="error-msg">{{ error.$message }}</div>
			</div>
	</div>
	<input v-model="state.password" type="password" name="password"  placeholder="Enter password" :class="{ 'input-error': v$.password.$error }" />
	<button @click="signupUser">Sign Up</button>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useRouter } from "vue-router";

const router = useRouter();

const state = ref({
	username: "",
	email: "",
	password: ""
})

const rules = {
	username: { required },
	email: { required, email },
	password: { required }
}

const v$ = useVuelidate(rules, state);

async function signupUser(e) {
	e.preventDefault();
	const isFormCorrect = await v$.value.$validate()
	if (!isFormCorrect) return
	await axios.post(`/api/users/register`, state.value);
	resetState();
	router.push({ name: 'product-list' });
}

function resetState() {
	state.value.username = "";
	state.value.email = "";
	state.value.password = "";
}

</script>

<style scoped>
.input-errors {
	color: red;
}

.input-error {
	border: 1px solid red;
}

</style>