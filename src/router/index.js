import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'SignIn',
        component: () => import("@/views/SignIn.vue"),
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: () => import("@/views/SignUp.vue"),
    },
    {
        path: '/ForgetPassword',
        name: 'ForgetPassword',
        component: () => import("@/views/ForgetPassword.vue"),
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
        children: [
            {
                path: "/dashboard",
                name: "dashboard Home",
                component: () => import("../views/DashboardHome.vue"),
            },
            {
                path: '/userprofile',
                name: 'UserProfile',
                component: () => import("@/components/UserProfile.vue"),
            },
            {
                path: '/imageupload',
                name: 'ImageUpload',
                component: () => import("@/components/ImageUpload.vue"),
            },
            {
                path: '/allphotos',
                name: 'AllPhotos',
                component: () => import("@/components/AllPhotos.vue"),
            },
            {
                path: '/privateimages',
                name: 'PrivateImages',
                component: () => import("@/components/PrivateImages.vue"),
            },
            {
                path: '/publicimages',
                name: 'PublicImages',
                component: () => import("@/components/PublicImages.vue"),
            },
        ],
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router