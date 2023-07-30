import { defineStore } from 'pinia'
import { ref } from "vue";
import axios from "axios";
import * as APIUtil from "../util/session_api_util";

const user = localStorage.getItem('jwtToken');
const initialState = user ? true : false;

export const useUserAuthStore = defineStore('userAuth', () => {
    const user = ref(null);
    const loggedIn = ref(initialState);

    const login = async (userLogin) => {
        const response = await axios.post(`/api/users/login`, userLogin);
        if(response.data.token) {
            localStorage.setItem('jwtToken', response.data.token);
            APIUtil.setAuthToken(response.data.token);
            user.value = userLogin;
            loggedIn.value = true;
            // const decoded = jwt_decode(token); Look into jwt_decode
        } else {
            user.value = null;
            loggedIn.value = false;
        }
    }

    function logout() {
        localStorage.removeItem('jwtToken')
        APIUtil.setAuthToken(false)
        user.value = null;
        loggedIn.value = false;
    }

    const register = async (signupInfo) => {
        await axios.post(`/api/users/register`, signupInfo);
        user.value = null;
        loggedIn.value = false;
    }

    return {
        login,
        logout,
        register,
        user,
        loggedIn
    }
})