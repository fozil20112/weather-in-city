import './App.css';
import React from "react";
import Box from "@mui/material/Box";
import {Routes, Route} from 'react-router-dom';
import Navbar from "../navbar/navbar";
import Search from "../search/search";
import Main from "../main/main";

function App() {
    return (
        <Box sx={{fontWeight: 'bold'}}>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/search/:city' element={<Search/>}/>
            </Routes>
        </Box>
    );
}

export default App;
