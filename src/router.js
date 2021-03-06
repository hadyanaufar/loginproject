import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/login.vue"
import SecureComponent from "./views/secure.vue"
import Registration from "./views/register.vue"
// import VeeValidate from 'vee-validate';

Vue.use(Router)
// Vue.use(VeeValidate)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        },
        {
            path: "/registration",
            name: "registration",
            component: Registration
        }
    ]
})