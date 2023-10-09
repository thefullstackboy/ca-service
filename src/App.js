import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login"
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import login from "./main"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path={login} element={<Login/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/" element={<Home/>}/>     
    </Routes>
    </BrowserRouter> 

    </>
  );
}

export default App;
