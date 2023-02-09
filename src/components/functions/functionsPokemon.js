import axios from "axios";

const listPokemon = (URL_BACK, pokemonId, setPokemonData) => {
    const promisse = axios.get(`${URL_BACK}/pokemon/${pokemonId}`)

    promisse.then(res => {
        setPokemonData(res.data);
    });

    promisse.catch(error => {
        console.log(error);
    });
}

const listTeam = (URL_BACK, pokemonId, setMyTeams) => {
    const token = localStorage.getItem("token");
    const promisse = axios.post(`${URL_BACK}/list-team-this-pokemon`,{
        "pokemonId": pokemonId
      },{
        headers: { Authorization: `Bearer ${token}` }
    })

    promisse.then(res => {
        setMyTeams(res.data);
    });

    promisse.catch(error => {
        console.log(error);
    });
}

const addPokemon = (URL_BACK, pokemonId, teamId, setRefresh) => {
    const token = localStorage.getItem("token");
    const promisse = axios.post(`${URL_BACK}/add-pokemon`,{
        pokemonId: pokemonId,
        teamId: teamId
    },{
        headers: { Authorization: `Bearer ${token}` }
    })

    promisse.then(res => {
        setRefresh(prev => !prev)
    });

    promisse.catch(error => {
        if (error.response.status === 401) {
            alert(error.response.data);
        }
    });
}

const removePokemon = (URL_BACK, pokemonId, teamId, setRefresh) => {
    const token = localStorage.getItem("token");
    const promisse = axios.post(`${URL_BACK}/remove-pokemon`,{
        pokemonId: pokemonId,
        teamId: teamId
    },{
        headers: { Authorization: `Bearer ${token}` }
    })

    promisse.then(res => {
        setRefresh(prev => !prev)
    });

    promisse.catch(error => {
        console.log(error);
    });
}

const functionsPokemon = {
    listPokemon,
    listTeam,
    addPokemon,
    removePokemon
}

export default functionsPokemon;