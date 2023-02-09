import { useNavigate, useParams } from "react-router-dom";
import { Header, Main, PokemonStyle, Footer, Add, Team } from "./style/stylePokemon.js";

import back from './../assets/img/arrow-back-outline.svg';
import selected from './../assets/img/ellipse.svg';
import notSelected from './../assets/img/ellipse-outline.svg';
import { useEffect, useState } from "react";
import functionsPokemon from "./functions/functionsPokemon.js";

export default function Pokemon({ URL_BACK }) {

    const navigate = useNavigate();

    const {pokemonId} = useParams();
    const [pokemonData, setPokemonData] = useState({});
    const [add, setAdd] = useState(false);
    const [myTeams, setMyTeams] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => functionsPokemon.listPokemon(URL_BACK, pokemonId, setPokemonData), []);
    useEffect(() => functionsPokemon.listTeam(URL_BACK, pokemonId, setMyTeams), [refresh]);

    function addOrRemovePokemon(teamId, pokemonId, have) {
        if(have) {
            functionsPokemon.removePokemon(URL_BACK, pokemonId, teamId, setRefresh)
        } else {
            functionsPokemon.addPokemon(URL_BACK, pokemonId, teamId, setRefresh)
        }
    }

    return (
        <PokemonStyle>
            <Header>
                <div className="back" onClick={() => navigate("/")}>
                    <img src={back} alt="back" />
                </div>
            </Header>
            <Main>
                <img src={pokemonData.img} alt={pokemonData.name} />
                <p className="name">{pokemonData.name}</p>
                <div className="info">{(pokemonData.stats||[]).map((stat, index) => {
                        return (
                            <p key={index}>{stat.statName}: {stat.statValue}</p>
                        )
                })}</div>
            </Main>
            <Footer>
                <button onClick={() => setAdd(true)}>Adicionar ao Time</button>
            </Footer>
            <Add theme={add ? '0' : '-60vh'}>
                <p>Escolha o time:</p>
                {myTeams.map(team => {
                    return(
                        <Team key={team.id} onClick={() => addOrRemovePokemon(team.id, pokemonId, team.have)}>
                            <p>{team.name}</p>
                            <img src={team.have ? selected : notSelected} alt={team.have ? "selected" : "not selected"}></img>
                        </Team>
                    )
                })}
            </Add>
            <div hidden={!add} onClick={() => setAdd(false)} className='background'></div>
        </PokemonStyle>
    )

}