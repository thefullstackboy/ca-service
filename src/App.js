import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn"
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import SignUp from "./components/SignUp/SignUp";
import Home2 from "./components/Home/Home2";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import CONSTANTS from "./main"
import CreateService from "./components/CreateService/CreateService";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path={CONSTANTS.URL.SIGN_IN} element={<SignIn/>}/>
    <Route path={CONSTANTS.URL.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
    <Route path={CONSTANTS.URL.SIGN_UP} element={<SignUp/>}/>
    <Route path={CONSTANTS.URL.HOME} element={<Home2/>}/>  
    <Route path={CONSTANTS.URL.DETAILS_PAGE} element={<DetailsPage/>}/>   
    <Route path={CONSTANTS.URL.CREATE_SERVICE} element={<CreateService/>}/>
    </Routes>
    </BrowserRouter> 

    </>
  );
}

export default App;
