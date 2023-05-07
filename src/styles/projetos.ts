import styled from "styled-components";

export const ProjetosContainer = styled.section`
  background-color: var(--main-color);
  max-width: 100%;
  padding: 20px;

  & > h3 {
    font-size: 20px;
    margin-bottom: 5px;
  }

  & > p {
    font-size: 10px;
    margin-bottom: 15px;
  }

  ul {
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (min-width: 768px) {
    padding: 50px;

    & > h3 {
      font-size: 30px;
    }

    & > p {
      font-size: 15px;
    }

    ul {
      flex-direction: row;
    }
  }
`;
