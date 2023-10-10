import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn"
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import CONSTANTS from "./main"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path={CONSTANTS.URL.SIGN_IN} element={<SignIn/>}/>
    <Route path={CONSTANTS.URL.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
    <Route path={CONSTANTS.URL.SIGN_UP} element={<SignUp/>}/>
    <Route path={CONSTANTS.URL.HOME} element={<Home/>}/>     
    </Routes>
    </BrowserRouter> 

    </>
  );
}

export default App;
