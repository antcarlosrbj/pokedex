import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {TeamsStyle, Header, Main, Team, Footer, AddTeam} from './style/styleTeams.js'
import back from './../assets/img/arrow-back-outline.svg';
import trash from './../assets/img/trash-outline.svg';
import functionsTeams from './functions/functionsTeams.js';
import axios from 'axios';

export default function Teams({ URL_BACK, user }) {

    const navigate = useNavigate();

    const [teams, setTeams] = useState([]);
    const [reload, setReload] = useState(false);
    const [addTeam, setAddTeam] = useState(false);
    const [nameTeam, setNameTeam] = useState("");

    useEffect(() => functionsTeams.isItVisit(user, navigate), []);
    useEffect(() => functionsTeams.listTeam(URL_BACK, setTeams), [reload]);

    async function addTeamForm(event) {

        event.preventDefault();
        const token = localStorage.getItem("token");

        const promisse = axios.post(URL_BACK + "/create-team", {
            name: nameTeam
        }, {
            headers: { Authorization: `Bearer ${token}` }
        })
    
        promisse.then(res => {
            setAddTeam(false);
            setNameTeam("");
            setReload(prev => !prev);
        });
    
        promisse.catch(error => {
            setNameTeam("");
            alert("Não foi possível adicionar um time")
        });
    }

    function deleteTeam(id) {
        const token = localStorage.getItem("token");
        
        const promisse = axios.post(URL_BACK + "/delete-team", {
            id
        }, {
            headers: { Authorization: `Bearer ${token}` }
        })
    
        promisse.then(res => {
            setReload(prev => !prev);
        });
    
        promisse.catch(error => {
            alert("Não foi possível excluir esse time")
        });
    }

    return (
        <TeamsStyle>
            <Header>
                <div className="back" onClick={() => navigate("/")}>
                    <img src={back} alt="back" />
                </div>
                <h1>Times</h1>
            </Header>
            <Main>
                {teams.map(team => {
                    return(
                        <Team key={team.id}>
                            <p>{team.name}</p>
                            <a onClick={() => deleteTeam(team.id)}><img src={trash} alt="trash"></img></a>
                        </Team>
                    )
                })}
            </Main>
            <Footer>
                <button onClick={() => setAddTeam(true)}>Adicionar Time</button>
            </Footer>
            <AddTeam theme={addTeam ? '0' : '-40vh'}>
                <form onSubmit={addTeamForm}>
                    <input type="text" value={nameTeam} placeholder="Nome do time" onChange={e => setNameTeam(e.target.value)} required />
                    <button type="submit">Adicionar</button>
                </form>
            </AddTeam>
            <div hidden={!addTeam} onClick={() => setAddTeam(false)} className='background'></div>
        </TeamsStyle>
    )

}