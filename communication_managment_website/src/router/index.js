import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CaseStudies from "../views/CaseStudies.vue";
import Resources from "../views/Resources.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/case-studies",     
    name: "case-studies",
    component: CaseStudies, 
  },
  {
    path: "/resources",     
    name: "resources",
    component: Resources, 
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
