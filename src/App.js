import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import { auth } from "./firebase.js";

function App() {
  const user = null;

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
        console.log("Nehum usuario logado");
      }
    });

    return unsubscribe;
  }, []);

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
