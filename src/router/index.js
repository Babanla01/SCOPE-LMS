import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CourseView from "../views/courseView.vue";
import AboutUs from "../views/aboutUs.vue";
import Pricing from "../views/priCing.vue";
import Contact from "../views/contactUs.vue";
import SignUp from "../views/signUp.vue";
import LogIn from "../views/logIn.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Courses",
    name: "Courses",
    component: CourseView,
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    component: AboutUs,
  },
  {
    path: "/Pricing",
    name: "pricing",
    component: Pricing,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/LogIn",
    name: "LogIn",
    component: LogIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
