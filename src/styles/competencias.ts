import styled from "styled-components";
import conenebula from "../assets/conenebula.jpg";

export const CompetenciasContainer = styled.section`
  background-image: url(${conenebula});
  background-size: cover;
  background-repeat: no-repeat;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  padding: 30px 10px;
  justify-content: space-between;
  font-size: 10px;

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
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    padding: 50px 70px;
    align-items: flex-start;
    font-size: 12px;
    justify-content: space-around;

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
