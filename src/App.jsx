import React, { useEffect, useState } from "react";
import { Routes, Route, redirect, Navigate } from "react-router";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Header from "./components/Header";

function App() {
  const [authorized, setAuthorized] = useState(false);

  return (
    <div className="App">
      <Header authorized={authorized} />
      <Routes>
        <Route
          path="/"
          element={!authorized ? <Navigate replace to="/auth" /> : <Home />}
        />
        <Route path="/auth" element={<SignUp />}>
          <Route path="registration" element={<SignUp />} />
          <Route path="login" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
