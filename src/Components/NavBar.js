import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { css } from "styled-components/macro";
import logo from "../images/Logo.png";
import { menuData } from "../Data/MenuData";
import { Button } from "./Button";
import { RiBarChartHorizontalFill } from "react-icons/ri";

const NavBar = ({ toggle }) => {
  return (
    <Nav>
      <Logo src={logo} alt="Logo" />
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default NavBar;

// CSS (STYLED)
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 80px;
`;

const NavLink = css`
  font-family: Poppins;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

// LOGO
const Logo = styled.img`
  ${NavLink}
  width: 14rem;
  height: 3.5rem;
  margin-left: 50px;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    margin-left: 0px;
  }
`;

const MenuBars = styled(RiBarChartHorizontalFill)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 40%);
    &:hover {
      color: rgba(0, 134, 179, 1);
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 620px;
  margin-top: 70px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
