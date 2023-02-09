import styled from "styled-components";

export const PokemonStyle = styled.div`
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

    img {
        width: 40vw;
        margin-bottom: 5vh;
    }

    p.name {
        font-size: 6vh;
        height: 6vh;
        margin-bottom: 5vh;
    }

    .info {
        width: 80vw;
        margin-top: 2vh;
    }

    .info > p {
        font-size: 3vh;
        height: 5vh;
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

export const Add = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: ${function (props) {return props.theme} };
    height: 60vh;
    background-color: #AAAAAA;
    z-index: 2;
    padding: 5vw 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;

    button {
        width: 60vw;
        height: 6vh;
        background-color: black;
        border-radius: 1vh;
        border: 2px solid gray;
        color: white;
        font-size: 5vw;
    }

    & > p {
        font-size: 5vw;
        margin-bottom: 5vw;
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

    img {
        width: 8vw;
    }
`;