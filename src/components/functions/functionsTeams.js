import axios from "axios";

const isItVisit = (user, navigate) => {
    if(user === "Visitante") {
        navigate("/login")
    }
}

const listTeam = (URL_BACK, setTeams) => {
    const token = localStorage.getItem("token");

    const promisse = axios.get(`${URL_BACK}/list-team`, {
        headers: { Authorization: `Bearer ${token}` }
    })

    promisse.then(res => {
        setTeams(res.data);
    });

    promisse.catch(error => {
        console.log(error);
    });
}

const functionsTeams = {
    isItVisit,
    listTeam
}

export default functionsTeams;