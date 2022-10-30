import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  padding: 14px;
  margin-right: 20px;

  &.active {
    color: #8b008b;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #000000;
  }
`;
