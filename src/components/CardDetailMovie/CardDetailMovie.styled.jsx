import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  padding: 0 20px;
`;

export const CardButton = styled.button`
  padding: 4px;
  border-radius: 3px;
  border: none;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 3px;
  margin: 20px 15px 0;
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 10px;
`;
export const ImgCard = styled.img`
  width: 220px;
  height: 100%;
`;
export const InfoContainer = styled.div`
  padding: 20px;
`;
export const Chip = styled.span`
  margin-left: 10px;
`;
export const GenerList = styled.ul`
  display: flex;
  list-style: none;
  margin: 20px 0;
`;
export const GenerItem = styled.li`
  margin-right: 10px;
`;
export const CardText = styled.p`
  margin: 20px 0;
`;

export const InfoCard = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.35);
  margin: 10px 0;
  padding: 15px 20px;
`;

export const InfoList = styled.ul`
  list-style: none;
`;
export const InfoItem = styled.li`
  margin: 10px;
`;
export const MainTitle = styled.h1``;
export const SecondTitle = styled.h2``;
export const AdditionalInfo = styled.p``;

export const CardLink = styled(Link)`
  color: #000;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  &:hover {
    color: rgb(255, 72, 0);
  }
`;
export const LinkBTN = styled(Link)`
  text-decoration: none;
  &:hover {
    color: rgb(255, 72, 0);
  }
`;
