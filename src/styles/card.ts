import styled from "styled-components";

export const CardStyle = styled.li`
  background-color: var(--dark-color);
  border: 2px solid var(--grey3);
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 30%;
  }
`;
