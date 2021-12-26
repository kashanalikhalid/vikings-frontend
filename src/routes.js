/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import AddStaff from "./views/AddStaff.js";
import AddMember from "./views/AddMember.js";
import StaffProfile from './views/StaffProfile'
import MemberList from "./views/MemberList";
import StaffList from "./views/StaffList";
import MemberProfile from "./views/MemberProfile";
import Verify from "./views/verify";
import AttendanceList from "./views/attendanceList";
import TrainingList from "./views/TrainingList";
import WeightList from "./views/WeightList";
import CardioList from "./views/CardioList";
import CardioWeightList from "./views/CardioWeight";
import FeeHistory from "./views/FeeHistory";

const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/members",
    component: MemberList,
    layout: "/admin",
  },
  {
    path: "/weight",
    component: WeightList,
    layout: "/admin",
  },
  {
    path: "/training",
    component: TrainingList,
    layout: "/admin",
  },
  {
    path: "/cardio",
    component: CardioList,
    layout: "/admin",
  },
  {
    path: "/strengthcardio",
    component: CardioWeightList,
    layout: "/admin",
  },
  {
    path: "/staff",
    component: StaffList,
    layout: "/admin",
  },
  {
    path: "/attendance",
    component: AttendanceList,
    layout: "/admin",
  },
  {
    path: "/data/addstaff",
    component: AddStaff,
    layout: "/admin",
  },
  {
    path: "/memberprofile/:id",
    component: MemberProfile,
    layout: "/admin",
  },
  {
    path: "/data/addmember",
    component: AddMember,
    layout: "/admin",
  },
  {
    path: "/staffprofile/:id",
    component: StaffProfile,
    layout: "/admin",
  },
  {
    path: "/verification",
    component: Verify,
    layout: "/admin",
  },
  {
    path: "/feehistory",
    component: FeeHistory,
    layout: "/admin",
  },



];

export default dashboardRoutes;
