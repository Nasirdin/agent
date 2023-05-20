import React from "react";
import { Routes, Route } from "react-router";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<SignIn />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
