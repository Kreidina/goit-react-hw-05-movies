import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  list-style: none;
  padding: 15px;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieImg = styled.img`
  height: 340px;
`;
export const MovieTitle = styled.p`
  margin: 10px 0;
`;

export const TerndingTitle = styled.h1`
  margin: 10px;
`;
export const MovieNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  &:hover {
    color: rgb(255, 72, 0);
  }
`;
