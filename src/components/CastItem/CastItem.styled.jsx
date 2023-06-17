import styled from '@emotion/styled';

export const CastIMG = styled.img`
  width: 100px;
`;
export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  grid-gap: 16px;
  list-style: none;
  padding: 15px;
`;
export const Item = styled.li``;

export const CastCharacter = styled.p`
  font-size: 12px;
`;
export const CastName = styled.p`
  margin: 10px;
  font-weight: 600;
  font-size: 12px;
`;
export const CastMessage = styled.p`
  margin: 20px 0;
  padding: 0 40px;
  fontweight: 700;
`;
