import styled from "styled-components";
import pilares from "../assets/pilarescreation.jpg";

export const HomeStyle = styled.section`
  background-image: url(${pilares});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
  padding: 10px;
  div {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    height: 400px;
    div {
      display: block;
    }
  }
`;

export const HomeTitle = styled.h2`
  margin-top: 20px;
  width: fit-content;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    transform: translateX(50px) translateY(50px);
  }
`;

export const HomeText = styled.p`
  width: 150px;
  font-size: 12px;

  @media (min-width: 768px) {
    transform: translateX(100px) translateY(100px);
    font-size: 20px;
    width: 250px;
  }
`;

export const HomeImg = styled.img`
  width: 70px;
  border-radius: 5px;

  @media (min-width: 768px) {
    transform: translateX(830px) translateY(-25px);
    width: 150px;
  }
`;
