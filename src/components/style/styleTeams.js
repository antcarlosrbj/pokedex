import styled from "styled-components";

export const TeamsStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #D54A4A;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .background {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #000000A0;
        z-index: 1;
    }
`;

export const Header = styled.div`
    width: 100%;
    min-height: 10vh;
    background-color: #EAEAEA;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .back {
        min-width: 15vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .back > img {
        width: 6vh;
    }

    h1 {
        font-size: 6vw;
        display: block;
        margin-right: 15vw;
        width: 100%;
        text-align: center;
    }
`;

export const Main = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8vw 0;

    p {
        height: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Team = styled.div`
    min-height: 20vw;
    width: 85vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2vw 5vw 2vw 10vw;
    background-color: #FFFFFF50;
    margin-bottom: 2vw;

    p {
        font-size: 5vw;
        height: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        width: 8vw;
    }
`;

export const Footer = styled.div`
    width: 100%;
    min-height: 10vh;
    background-color: #EAEAEA;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        width: 60vw;
        height: 6vh;
        background-color: black;
        border-radius: 1vh;
        border: 2px solid gray;
        color: white;
        font-size: 5vw;
    }
`;

export const AddTeam = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: ${function (props) {return props.theme} };
    height: 40vh;
    background-color: #AAAAAA;
    z-index: 2;
    padding: 15vw 10vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    button {
        width: 60vw;
        height: 6vh;
        background-color: black;
        border-radius: 1vh;
        border: 2px solid gray;
        color: white;
        font-size: 5vw;
    }

    form > input {
        height: 10vw;
        width: 90vw;
        border-radius: 5px;
        border: 0;  
        padding: 15px;
        box-sizing: border-box;
        margin-bottom: 13px;
        font-size: 20px;
    }

    form > button {
        height: 15vw;
        width: 90vw;
        border-radius: 5px;
        border: 0;  
        padding: 15px;
        box-sizing: border-box;
        margin-bottom: 13px;
        font-size: 20px;
    }
`;
