import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        products: [],
        cart: [],
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            state.cart.push(product);
        },
        ADD: (state, id) => {
            state.products.forEach(product => {
                if (product.id === id) {
                    product.quantity++;
                }
            })
        },
        REMOVE: (state, id) => {
            state.products.forEach(product => {
                if (product.id === id && product.quantity > 0) {
                    product.quantity--;
                }
            })
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        },
        ADD_PRODUCT({commit}, index) {
            commit('ADD', index)
        },
        REMOVE_PRODUCT({commit}, index) {
            commit('REMOVE', index)
        }
    },
})
