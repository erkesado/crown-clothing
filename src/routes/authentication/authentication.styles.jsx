import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10%;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 3rem;

    h2 {
      margin: 10px 0;
    }

    @media (min-width: 768px) {
      width: 45%;
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
