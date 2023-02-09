import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import menu from './../assets/img/menu-outline.svg';
import functionsHome from './functions/functionsHome.js';
import {HomeStyle, Header, Menu, Main, Pokemon} from './style/styleHome.js';

export default function Home({ URL_BACK, user, setUser }) {

    const navigate = useNavigate();

    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => functionsHome.listPokemons(currentPage, URL_BACK, setPokemons), [currentPage]);
    useEffect(() => functionsHome.observer(setCurrentPage), []);
    useEffect(() => functionsHome.validateToken(URL_BACK, setUser), []);

    return (
        <HomeStyle>
            <Header>
                <div className="menu" onClick={() => setMenuVisible(true)}>
                    <img src={menu} alt="menu" />
                </div>
            </Header>
            <div hidden={!menuVisible} onClick={() => setMenuVisible(false)} className='background'></div>
            <Menu theme={menuVisible ? '0' : '-80vw'}>
                <a>{"Olá, " + user}</a>
                <a onClick={() => navigate(`/teams`)}>Times</a>
                <a onClick={() => functionsHome.login(navigate)}>{user === "Visitante" ? "Fazer Login" : "Sair"}</a>
            </Menu>
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