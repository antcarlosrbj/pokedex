import styled from 'styled-components';

export const HomeStyle = styled.div`
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

    .menu {
        width: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu > img {
        width: 6vh;
    }
`;

export const Menu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: ${function (props) {return props.theme} };
    width: 80vw;
    background-color: #AAAAAA;
    z-index: 2;
    padding: 15vw 10vw;

    a {
        display: block;
        font-size: 8vw;
        margin-top: 5vw;
    }
`;

export const Main = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 2vw;

    p {
        height: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Pokemon = styled.div`
    height: 40vw;
    width: 30vw;
    margin: 1vw;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    img {
        height: 20vw;
        width: 20vw;
    }

    p {
        font-size: 4vw;
    }
`;