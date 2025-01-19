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
        {
          path: "/Sponsor",
          name: "SponsorPage",
          component:() => import("../views/SponsorView.vue")
        },
        {
          path: "/Sponsor/:id",
          name: "SponsorSingle",
          component:() => import("../views/SponsorSingle.vue")
        },

        
      ]}
    
  ],
});

export default routes;
