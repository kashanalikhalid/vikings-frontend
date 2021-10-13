
import React, { Component } from "react";
import { useLocation, NavLink, useHistory } from "react-router-dom";
const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

import {Nav, NavDropdown, SplitButton, Dropdown, DropdownButton} from "react-bootstrap";
import '../../assets/css/sidebar.css'


function Sidebar({ color, image, routes }) {
  const history=useHistory();
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)",

        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img
                src={require("assets/img/reactlogo.png").default}
                alt="..."
              />
            </div>
          </a>
          <a className="simple-text">
            Vikings
          </a>
        </div>
        <Nav>

          <li
              className={
                activeRoute('/admin/dashboard')
              }
          >
            <NavLink   className="nav-link" to={'/admin/dashboard'}>
                <span> <i className='nc-icon nc-chart-pie-35' /> <p>Dashboard </p> </span>
            </NavLink>
          </li>

            <li
                className={
                    activeRoute('/admin/members')
                }
            >
                <NavLink to='/admin/members'   className="nav-link">
                    <span> <i className='nc-icon nc-single-02' /> <p>Members</p> </span>
                </NavLink>

            </li>

            <li
                className={
                    activeRoute('/admin/training')
                }
            >
                <NavLink to='/admin/training'   className="nav-link">
                    <span> <i className='nc-icon nc-single-02' /> <p>Training</p> </span>
                </NavLink>

            </li>

            <li
                className={
                    activeRoute('/admin/weight')
                }
            >
                <NavLink to='/admin/weight'   className="nav-link">
                    <span> <i className='nc-icon nc-single-02' /> <p>Strength</p> </span>
                </NavLink>

            </li>

            <li
                className={
                    activeRoute('/admin/cardio')
                }
            >
                <NavLink to='/admin/cardio'   className="nav-link">
                    <span> <i className='nc-icon nc-single-02' /> <p>Cardio</p> </span>
                </NavLink>

            </li>

            <li
                className={
                    activeRoute('/admin/strengthcardio')
                }
            >
                <NavLink to='/admin/strengthcardio'   className="nav-link">
                    <span> <i className='nc-icon nc-single-02' /> <p>Cardio and Strength</p> </span>
                </NavLink>

            </li>

            <li
                className={
                    activeRoute('/admin/staff')
                }
            >
                <NavLink to='/admin/staff'   className="nav-link">
                    <span> <i className='nc-icon nc-single-02' /> <p>Staff</p> </span>
                </NavLink>

            </li>


            <li
                className={
                    activeRoute('/admin/data')
                }
            >
                <NavDropdown title={<span> <i className='nc-icon nc-app' /> <p>Data Management</p> </span>}>

                        <Dropdown.Item onClick={()=>{history.push('/admin/data/addmember')}} className='btn-dropdownnested-item' as="button"><span> <i  className='dropdown-icon nc-icon nc-simple-add' /> <p className='dropdown-text'>Add Member</p> </span></Dropdown.Item>
                        <Dropdown.Item onClick={()=>{history.push('/admin/data/addstaff')}} className='btn-dropdownnested-item' as="button"><span> <i  className='dropdown-icon nc-icon nc-simple-add' /> <p className='dropdown-text'>Add Staff</p> </span></Dropdown.Item>
                </NavDropdown>
            </li>


            <li
                className={
                    activeRoute('/admin/verification')
                }
            >
                <NavLink to='/admin/verification'   className="nav-link">
                    <span> <i className='nc-icon nc-cctv' /> <p>Verification</p> </span>
                </NavLink>

            </li>

            <li
                className={
                    activeRoute('/admin/attendance')
                }
            >
                <NavLink to='/admin/attendance'   className="nav-link">
                    <span> <i className='nc-icon nc-notes' /> <p>Attendance</p> </span>
                </NavLink>

            </li>

        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
