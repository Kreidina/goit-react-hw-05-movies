import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  padding: 15px 0 15px 0;
`;

export const NavItem = styled.li`
  margin-left: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: large;
  font-weight: 600;
  padding: 15px;

  &.active {
    color: rgb(255, 72, 0);
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 4px;
    color: rgb(255, 72, 0);
    border-radius: 20px;
  }
`;
