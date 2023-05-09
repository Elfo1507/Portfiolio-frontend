import styled from "styled-components";

export const HeaderMenu = styled.header`
  background-color: var(--greyT);
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 40px;

  & > .nav {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  & > .lang {
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  a {
    color: var(--grey0);
  }

  @media (min-width: 768px) {
    font-size: 17px;
    padding: 5px 60px;
  }
`;
