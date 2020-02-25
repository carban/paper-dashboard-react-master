import CreateUser from "views/admin/CreateUser.jsx";
import GetUser from "views/admin/GetUser.jsx";


var adminRoutes = [
  {
    path: "/createUser",
    name: "createUser",
    icon: "nc-icon nc-diamond",
    component: CreateUser,
    layout: "/admin"
  },
  {
    path: "/getUser",
    name: "getUser",
    icon: "nc-icon nc-pin-3",
    component: GetUser,
    layout: "/admin"
  }
];

export default adminRoutes;
