import axios from "axios";

const SERVER_URL = 'http://localhost:3000';

const api = {
    async fetchProducts() {
        try {
            return axios(`${SERVER_URL}/products`);
        }
        catch (error) {
            console.error(error);
        }
    },
}

export default api;