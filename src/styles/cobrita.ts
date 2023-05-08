import styled from "styled-components";

interface iSquare{
    size: number
}

export const SnakeHeadStyle = styled.div<iSquare>`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    background-color: green;
    padding: ${(props) => props.size / 10}px;

    & > span {
        height: ${(props) => props.size / 10}px;
        width: ${(props) => props.size / 10}px;
        border-radius: 50%;
        background-color: black;
    }
`
export const SnakeBodyStyle = styled.div<iSquare>`
    height: ${(props) => props.size / 10}px;
    width: ${(props) => props.size / 10}px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: green;

    & > span {
        height: ${(props) => props.size / 10}px;
        width: ${(props) => props.size / 10}px;
        border-radius: 50%;
        background-color: black;
    }
`
export const SnakeTailStyle = styled.div<iSquare>`
    height: ${(props) => props.size / 10}px;
    width: ${(props) => props.size / 10}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: green;

    & > span {
        height: ${(props) => props.size / 10}px;
        width: ${(props) => props.size / 10}px;
        border-radius: 50%;
        background-color: black;
    }
`