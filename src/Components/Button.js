import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#000d1a" : "CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#ffff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  &:hover {
    transform: translateY(-2px);
    color: ${({ primary }) => (primary ? "#ffff" : "#000d1a")};
  }
`;
