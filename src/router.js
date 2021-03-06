import Vue from "vue";
import Router from "vue-router";
import Chat from "./views/Chat.vue";
import Login from "./views/Login.vue";
import store from "./store";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/login",
            name: "login",
            component: Login
        }, {
            path: "/",
            name: "chat",
            component: Chat,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => {
        return record.meta.requiresAuth
    })
    if(requiresAuth && !store.isRegistered) {
        next('/login')
    } else {
        next()
    }
})

export default router