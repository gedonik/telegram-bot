import {createRouter, createWebHistory} from "vue-router";
import AppCatalog from "@/components/AppCatalog";
import AppCart from "@/components/AppCart";

const routes = [
    {
        path: '/',
        component: AppCatalog
    },
    {
        path: '/cart',
        component: AppCart,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;