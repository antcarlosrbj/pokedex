import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";

function App() {
  
  const URL_BACK = "http://localhost:5000";
  const [token, setToken] = React.useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login URL_BACK={URL_BACK} setToken={setToken} />} />
        <Route path="/signup" element={<SignUp URL_BACK={URL_BACK} />} />
        <Route path="/" element={<Home URL_BACK={URL_BACK} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
