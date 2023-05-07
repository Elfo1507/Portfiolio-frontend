import styled from "styled-components";

export const SobreStyle = styled.section`
  background-color: var(--grey4);
  font-size: 10px;
  min-height: 200px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 40px;

  p {
    width: 100%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    font-size: 15px;
    div {
      height: 175px;
      width: 2px;
    }
    p {
      width: 100%;
    }
  }
`;
