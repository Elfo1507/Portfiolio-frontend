import { useEffect, useState } from "react";
import { SnakeGameStyle, SnakeGridStyle } from "../styles/snakeGame";
import { SnakeBody, SnakeHead, SnakeTail } from "./cuebrita";

interface iPoint {
  x: number;
  y: number;
}
interface iSnakeGame {
  snake: iPoint;
  fruit: iPoint;
  direction: "top" | "bottom" | "left" | "right";
}

export const SnakeGame = () => {
  const [size, setSize] = useState({ w: 0, h: 0, s: 0 });
  const randomRow = () => {
    return Math.floor(Math.random() * 41);
  };
  const randomCol = () => {
    return Math.floor(Math.random() * 31);
  };
  const [snakePos, setSnakePos] = useState<iPoint>({ x: 0, y: 0 });
  const [fruitPos, setfruitPos] = useState<iPoint>({
    x: randomRow(),
    y: randomCol(),
  });
  const [score, setScore] = useState<number>(0);
  const [direction, setDirection] = useState<string>("top");
  const [snakeBodyPos, setSnakeBodyPos] = useState<iPoint[]>([{ x: 0, y: 0 }]);
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleGetFruit = () => {
    setScore(score + 1);
    setfruitPos({ x: randomRow(), y: randomCol() });
  };
  const handleMove = () => {
    setSnakeBodyPos([snakePos, ...snakeBodyPos]);
    if (direction === "top") {
      setSnakePos({ x: snakePos.x, y: snakePos.y + 1 });
    } else if (direction === "down") {
      setSnakePos({ x: snakePos.x, y: snakePos.y - 1 });
    } else if (direction === "left") {
      setSnakePos({ x: snakePos.x + 1, y: snakePos.y });
    } else if (direction === "right") {
      setSnakePos({ x: snakePos.x - 1, y: snakePos.y });
    }
    if (snakePos === fruitPos) {
      handleGetFruit();
    } else {
      setSnakeBodyPos(snakeBodyPos.slice(0, -1));
    }
  };
  const handleChangeDirection = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      setDirection("top");
    } else if (e.key === "ArrowDown") {
      setDirection("bottom");
    } else if (e.key === "ArrowLeft") {
      setDirection("left");
    } else if (e.key === "ArrowRight") {
      setDirection("right");
    }
  };
  const handleLose = () => {
    setIsOn(false);
    console.log(score);
  };
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 600) {
      setSize({ w: 200, h: 150, s: 5 });
    } else if (width < 1024) {
      setSize({ w: 400, h: 300, s: 10 });
    } else {
      setSize({ w: 800, h: 600, s: 20 });
    }
  }, []);
  useEffect(() => {
    if (isOn) {
      document.addEventListener("keydown", handleChangeDirection);
    } else {
      document.removeEventListener("keydown", handleChangeDirection);
    }
  }, [isOn]);
  useEffect(() => {
    if (
      snakePos.x > 40 &&
      snakePos.x < 0 &&
      snakePos.y > 30 &&
      snakePos.y < 0
    ) {
      handleLose();
    }
    if (
      snakeBodyPos.filter((e, i) => snakeBodyPos.indexOf(e) !== i).length > 0
    ) {
      handleLose();
    }
  }, [snakePos]);
  const handleStart = () => {
    while (isOn) {
      setInterval(handleMove, 500);
    }
  };

  return (
    <SnakeGameStyle>
      <SnakeGridStyle w={size.w} h={size.h} pos={snakePos}>
        {snakeBodyPos.map((e, i) => {
          if (e === snakePos) {
            return <SnakeHead key={i} {...size} />;
          } else if (e === snakeBodyPos[-1]) {
            return <SnakeTail key={i} {...size} />;
          } else {
            return <SnakeBody key={i} {...size} />;
          }
        })}
      </SnakeGridStyle>
      <button
      type="button"
        onClick={() => {
          setIsOn(true);
          handleStart();
        }}
      >Começar</button>
    </SnakeGameStyle>
  );
};
