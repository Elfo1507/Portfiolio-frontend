import styled from "styled-components";

export const ContatosStyle = styled.footer`
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: 10px;
    margin-top: 2px;
  }
`;
