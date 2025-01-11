import { createRouter, createWebHistory } from "vue-router"
import Layout from "../Layout/defoult.vue";
const routes = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes: [
      
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/",
          name: "home",
          component:() => import("../views/HomeView.vue")
        },
        // {
        //   path: '/',
        //   name: 'home',
        //   meta:{
        //     layout: "default",
        //   },
        //   component:() => import("../views/HomeView.vue")
        // },
      ]}
    
  ],
});

export default routes;
