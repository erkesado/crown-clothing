import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 60px;
  padding: 10px 20px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 800px) {
    height: 70px;
    margin-bottom: 25px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 50px;
  padding: 0;

  @media screen and (min-width: 800px) {
    width: 70px;
  }
`;

export const NavLinks = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 800px) {
    width: 50%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
