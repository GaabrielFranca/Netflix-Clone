import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";

function App() {
  const user = null;
  return (
    <>
      {!user ? (
        <LoginScreen />
      ) : (
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<HomeScreen />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
