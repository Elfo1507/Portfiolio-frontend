import styled from "styled-components";

export const CardCompStyle = styled.li`
  background-color: var(--main-color);
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;

  &:hover {
    box-shadow: 0 0 5px 2.5px rgba(255, 255, 255, 0.7);
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    width: 30%;
  }
`;