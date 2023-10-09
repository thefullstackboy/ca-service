import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/log-in" element={<Login/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/" element={<Home/>}/>
      {/* 
     
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/listing/:listingId" element={<Listing/>}/>       */}
    </Routes>
    </BrowserRouter> 

    </>
  );
}

export default App;
