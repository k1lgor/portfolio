import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Portfolio from "../components/Portfolio.vue";
import Certificates from "../components/Certificates.vue";
import Contacts from "../components/Contacts.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/portfolio", name: "portfolio", component: Portfolio },
  { path: "/certificates", name: "certificates", component: Certificates },
  { path: "/contacts", name: "contacts", component: Contacts },
  { path: "*", redirect: "/" }
];
