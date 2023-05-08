import styled from "styled-components";

interface iSize {
  w: number;
  h: number;
  pos: {
    x: number;
    y: number;
  };
}

export const SnakeGridStyle = styled.div<iSize>`
  position: relative;
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  background-color: black;

  & .snake {
    position: absolute;
    bottom: ${(props) => props.pos.y * (props.h / 40)}px;
    right: ${(props) => props.pos.x * (props.w / 40)}px;
  }
`;
export const SnakeGameStyle = styled.section`
  display: flex;
  background-color: green;
  justify-content: space-between;
`;
