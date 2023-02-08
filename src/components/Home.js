import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import menu from './../assets/img/menu-outline.svg';

export default function Home() {

    const navigate = useNavigate();
    const[pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if(currentPage !== 0) {
            const promisse = axios.get(`http://localhost:5000/all-pokemons?page=${currentPage}`)

            promisse.then(res => {
                setPokemons((prevPokemons) => [...prevPokemons, ...res.data]);
            });

            promisse.catch(error => {
                console.log(error);
            });
        }
    }, [currentPage]);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
            setCurrentPage((currentValue) => currentValue + 1);
        }
        })
        intersectionObserver.observe(document.querySelector('#loading-more'));
        return () => intersectionObserver.disconnect();
    }, []);


    return (
        <HomeStyle>
            <Header>
                <div className="menu">
                    <img src={menu} alt="menu" />
                </div>
            </Header>
            <Main>
                {pokemons.map(pokemon => {
                    return (
                        <Pokemon key={pokemon.id} onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
                            <img src={pokemon.img} alt={pokemon.name} />
                            <p>{pokemon.name}</p>
                        </Pokemon>
                    )
                })}
                <p id='loading-more'>Carregando mais...</p>
            </Main>
        </HomeStyle>
    )

}

const HomeStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #D54A4A;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Header = styled.div`
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

const Main = styled.div`
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

const Pokemon = styled.div`
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