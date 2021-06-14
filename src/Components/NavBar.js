import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { css } from "styled-components/macro";
import logo from "../images/Logo.png";
import { menuData } from "../Data/MenuData";
import { Button } from "./Button";
import { RiBarChartHorizontalFill } from "react-icons/ri";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <Logo src={logo} alt="Logo" />
      <MenuBars onClick={toggle} scrollNav={scrollNav} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index} scrollNav={scrollNav}>
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
  position: fixed;
  background: ${({ scrollNav }) =>
    scrollNav ? "rgba(255,255,255,0.9)" : "transparent"};
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  width: 100%;
  height: 80px;
`;

const NavLink = css`
  font-family: Poppins;
  font-weight: 700;
  color: black;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${({ scrollNav }) =>
      scrollNav ? "rgba(77, 166, 255,1)" : "rgba(255,255,255,1)"};
  }
`;

// LOGO
const Logo = styled.img`
  ${NavLink}
  width: 14rem;
  height: 3.5rem;
  margin-left: 50px;
  // margin-top: 40px;
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
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 40%);
    &:hover {
      color: ${({ scrollNav }) =>
        scrollNav ? "rgba(77, 166, 255,1)" : "rgba(255,255,255,1)"};
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 550px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
