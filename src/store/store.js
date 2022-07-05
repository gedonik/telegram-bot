import {createStore} from 'vuex';
import api from '@/services/api';

export default createStore({
    state: {
        products: [],
        cart: [],
    },
    mutations: {
        setProducts: (state, products) => {
            state.products = products;
        },
        addToCart: (state, product) => {
            product.isBtnActive = false;
            product.quantity = 1;
            state.cart.push(product);
        },
        increaseQuantity: (state, productId) => {
            state.cart.map(product => {
                if (product.id === productId) {
                    product.quantity++;
                    if (product.quantity > 0) {
                        product.isBtnActive = false;
                    }
                }
            })
        },
        reduceQuantity: (state, productId) => {
            state.cart.map(product => {
                if (product.id === productId) {
                    if (product.quantity > 0) {
                        product.quantity--;
                    }
                    if (product.quantity === 0) {
                        product.isBtnActive = true;
                        state.cart = state.cart.filter(product => product.id !== productId);
                    }
                }
            })
        }
    },
    actions: {
        async fetchProducts({commit}) {
            const response = await api.fetchProducts();
            commit('setProducts', response.data);
        },
    },
})
