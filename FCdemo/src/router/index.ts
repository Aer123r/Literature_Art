
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "/",
        redirect: "/home",
        meta: {
            icon: "home-filled",
            title: "首页",
        },
        component: () => import("@/layout/index.vue"),
         children: [
            {
                path: "/home",
                name: "home",
                meta: {
                    title: "首页",
                },
                component: () => import("../home/index.vue"),
            },

            {
                path: "/2",
                name: "Search",
                meta: {
                    title: "Search",
                },
                component: () => import("../views/SearchView.vue"),
            },
            {
                path: "/3",
                name: "OnlineShop",
                meta: {
                    title: "OnlineShop",
                },
                component: () => import("../views/OnlineShopView.vue"),
            },
            {
                path: "/4",
                name: "SmartCloud",
                meta: {
                    title: "SmartCloud",
                },
                component: () => import("../views/SmartCloudView.vue"),
            },
            {
                path:'/person',
                name:'person',
                component:()=>import("@/views/PersonView.vue")
            },
            {
                path:'/feedback',
                name:'feedback',
                component:()=>import("@/views/FeedbackView.vue")
            },
        ],
    },
    {
        path:'/login',
        name:'Login',
        component:()=>import("@/views/LoginView.vue")
    },
    {
        path:'/register',
        name:'Register',
        component:()=>import("@/views/RegisterView.vue")
    },
    {
        path:'/find',
        name:'Find',
        component:()=>import("@/views/FindView.vue")
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
