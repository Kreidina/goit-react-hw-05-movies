import { Nav, NavItem, NavList, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <>
      <Nav>
        <NavList>
          <NavItem>
            <StyledNavLink to="/">Home</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </NavItem>
        </NavList>
      </Nav>
    </>
  );
};
