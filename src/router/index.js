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
        {
          path: "/Students",
          name: "StudentsPage",
          component:() => import("../views/StudentsView.vue")
        },
        {
          path: "/Students/:id",
          name: "StudentsSingle",
          component:() => import("../views/StudentsSingle.vue")
        },
        
      ]}
    
  ],
});

export default routes;
