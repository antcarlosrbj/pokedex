import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Teams from "./Teams";
import Pokemon from "./Pokemon";

function App() {
  
  const URL_BACK = "http://localhost:5000";
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState("Visitante");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login URL_BACK={URL_BACK} setToken={setToken} />} />
        <Route path="/signup" element={<SignUp URL_BACK={URL_BACK} />} />
        <Route path="/" element={<Home URL_BACK={URL_BACK} user={user} setUser={setUser} />} />
        <Route path="/teams" element={<Teams URL_BACK={URL_BACK} user={user} token={token} />} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon URL_BACK={URL_BACK} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
