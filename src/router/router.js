import {createRouter, createWebHistory} from "vue-router";
import AppCatalog from "@/components/AppCatalog";
import AppCart from "@/components/AppCart";

const routes = [
    {
        path: '/',
        component: AppCatalog,
        name: 'catalog',
    },
    {
        path: '/cart',
        component: AppCart,
        name: 'cart',
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;