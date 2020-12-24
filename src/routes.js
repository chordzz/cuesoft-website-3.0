import { Home, About, Contact, NotFound } from "./pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: '*',
    component: NotFound
  },
];

export default routes;