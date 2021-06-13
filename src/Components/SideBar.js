import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { menuData } from "../Data/MenuData";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLinks to={item.link} key={index}>
              {item.title}
            </DropdownLinks>
          ))}
        </DropdownMenu>
      </DropdownWrapper>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 128, 255, 1);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: rgb(0, 77, 77);
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const DropdownLinks = styled(Link)`
  font-family: Roboto;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: white;
  cursor: pointer;
  &:hover {
    color: rgb(0, 77, 77);
  }
`;
