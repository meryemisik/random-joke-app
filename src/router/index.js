import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "../components/Home"
import Categories from "../components/Categories"
import Joke from "../components/Joke"
import Random from "../components/Random"
Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path : "/categories",
        name : "Categories",
        component : Categories
    },
    {
        path : "/categories/:categoryId",
        name : "Joke",
        component : Joke
    },
    {
        path:"/random",
        name:"Random",
        component:Random
    }
]

const router = new VueRouter({
    mode : "history",
    routes
})

export default router;