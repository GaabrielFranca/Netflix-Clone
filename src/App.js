import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import { logout, login, selectUser } from "./features/user/userSlice";
import { auth } from "./firebase.js";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
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
