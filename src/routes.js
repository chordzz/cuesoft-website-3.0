import { Home, About, Contact, Services, NotFound } from "./pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/services",
    component: Services,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
