import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import UserProfile from "./components/UserProfile";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/*' element={<NotFound/>}></Route>
                <Route path='/user/:username' element={<UserProfile/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
