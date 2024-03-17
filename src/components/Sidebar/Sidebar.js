import React, { Component } from "react";
import { useLocation, NavLink, useHistory } from "react-router-dom";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import RememberMeOutlinedIcon from "@mui/icons-material/RememberMeOutlined";
import FemaleOutlinedIcon from "@mui/icons-material/FemaleOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import SportsKabaddiOutlinedIcon from "@mui/icons-material/SportsKabaddiOutlined";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Groups3OutlinedIcon from "@mui/icons-material/Groups3Outlined";
const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

import {
  Nav,
  NavDropdown,
  SplitButton,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "../../assets/css/sidebar.css";
import logo from "../../assets/img/Vikings.svg";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { RunningWithErrorsOutlined } from "@mui/icons-material";

function Sidebar({ color, image, routes }) {
  const history = useHistory();
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)",
        }}
      />
      <div className="sidebar-wrapper">
        {/*<div className="logo d-flex align-items-center justify-content-start">*/}
        {/*  <a*/}
        {/*    className="simple-text logo-mini mx-1"*/}
        {/*  >*/}
        {/*    <div className="logo-img">*/}
        {/*      <img src={logo} alt="..." />*/}
        {/*    </div>*/}
        {/*  </a>*/}
        {/*  <a className="simple-text">Vikings</a>*/}
        {/*</div>*/}
        <Nav>
          <li className={activeRoute("/admin/dashboard")}>
            <NavLink
              className="nav-link nav-link-sidebar-padding"
              to={"/admin/dashboard"}
            >
              <span>
                {" "}
                <SpaceDashboardOutlinedIcon className="nc-icon" />{" "}
                <p>Dashboard </p>
              </span>
            </NavLink>
          </li>

          <li className={activeRoute("/admin/members")}>
            <NavLink
              to="/admin/members"
              className="nav-link nav-link-sidebar-padding"
            >
              <span>
                {" "}
                <GroupsOutlinedIcon className="nc-icon" /> <p>Members</p>{" "}
              </span>
            </NavLink>
          </li>

          <li className={activeRoute("/admin/females")}>
            <NavLink
              to="/admin/females"
              className="nav-link nav-link-sidebar-padding"
            >
              <span>
                {" "}
                <FemaleOutlinedIcon className="nc-icon" /> <p>Females</p>{" "}
              </span>
            </NavLink>
          </li>

          <li className={activeRoute("/admin/training")}>
            <NavLink
              to="/admin/training"
              className="nav-link nav-link-sidebar-padding"
            >
              <span>
                {" "}
                <SportsKabaddiOutlinedIcon className="nc-icon" />{" "}
                <p>Training</p>{" "}
              </span>
            </NavLink>
          </li>

          <li className={activeRoute("/admin/weight")}>
            <NavLink
              to="/admin/weight"
              className="nav-link nav-link-sidebar-padding"
            >
              <span>
                {" "}
                <FitnessCenterOutlinedIcon className="nc-icon" />{" "}
                <p>Strength</p>{" "}
              </span>
            </NavLink>
          </li>

          <li className={activeRoute("/admin/cardio")}>
            <NavLink
              to="/admin/cardio"
              className="nav-link nav-link-sidebar-padding"
            >
              <span>
                {" "}
                <DirectionsRunOutlinedIcon className="nc-icon" /> <p>Cardio</p>{" "}
              </span>
            </NavLink>
          </li>

          <li className={`${activeRoute("/admin/strengthcardio")}`}>
            <NavLink
              to="/admin/strengthcardio"
              className="nav-link nav-link-sidebar-padding"
            >
              <span>
                {" "}
                <Groups3OutlinedIcon className="nc-icon" />{" "}
                <p>Cardio & Strength</p>{" "}
              </span>
            </NavLink>
          </li>

          <li className={activeRoute("/admin/staff")}>
            <NavLink
              to="/admin/staff"
              className="nav-link nav-link-sidebar-padding"
            >
              <span>
                {" "}
                <RememberMeOutlinedIcon className="nc-icon" /> <p>Staff</p>{" "}
              </span>
            </NavLink>
          </li>

          <li className={activeRoute("/admin/data")}>
            <NavDropdown
              title={
                <span>
                  {" "}
                  <CreateNewFolderOutlinedIcon className="nc-icon" />{" "}
                  <p>Data Management</p>{" "}
                </span>
              }
            >
              <Dropdown.Item
                onClick={() => {
                  history.push("/admin/data/addmember");
                }}
                className="btn-dropdownnested-item"
                as="button"
              >
                <span>
                  {" "}
                  <GroupAddOutlinedIcon className="nc-icon" />{" "}
                  <p className="dropdown-text">Add Member</p>{" "}
                </span>
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  history.push("/admin/data/addstaff");
                }}
                className="btn-dropdownnested-item"
                as="button"
              >
                <span>
                  {" "}
                  <PersonAddAltOutlinedIcon className="nc-icon" />{" "}
                  <p className="dropdown-text">Add Staff</p>{" "}
                </span>
              </Dropdown.Item>
            </NavDropdown>
          </li>

          <li className={activeRoute("/admin/feehistory")}>
            <NavLink
              to="/admin/feehistory"
              className="nav-link nav-link-sidebar-padding"
            >
              <span>
                {" "}
                <PaidOutlinedIcon className="nc-icon" /> <p>Fee History</p>{" "}
              </span>
            </NavLink>
          </li>

          <li className={activeRoute("/admin/verification")}>
            <NavLink
              to="/admin/verification"
              className="nav-link nav-link-sidebar-padding"
            >
              <span>
                {" "}
                <FingerprintOutlinedIcon className="nc-icon" />{" "}
                <p>Verification</p>{" "}
              </span>
            </NavLink>
          </li>

          <li className={activeRoute("/admin/attendance")}>
            <NavLink
              to="/admin/attendance"
              className="nav-link nav-link-sidebar-padding"
            >
              <span>
                {" "}
                <AssignmentOutlinedIcon className="nc-icon" /> <p>Attendance</p>{" "}
              </span>
            </NavLink>
          </li>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
