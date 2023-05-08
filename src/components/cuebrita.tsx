import { SnakeBodyStyle, SnakeHeadStyle, SnakeTailStyle } from "../styles/cobrita";

interface props{
  s: number
}

export const SnakeHead = ({s}: props) => {
  return (
    <SnakeHeadStyle className="snake" size={s}>
      <span />
      <span />
    </SnakeHeadStyle>
  );
};

export const SnakeBody = ({s}: props) => {
  return (
    <SnakeBodyStyle className="snake" size={s}>
      <span />
      <span />
      <span />
    </SnakeBodyStyle>
  );
};

export const SnakeTail = ({s}: props) => {
  return (
    <SnakeTailStyle className="snake" size={s}>
      <span />
    </SnakeTailStyle>
  );
};
