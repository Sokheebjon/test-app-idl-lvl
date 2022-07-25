import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {CheckRoom, Home, AddBooking} from "./pages";
import {Layout} from "./components";
import {Toaster} from "react-hot-toast";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="*" element={<Navigate to="/" replace/>}/>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="add-booking" element={<AddBooking/>}/>
                    <Route path="check-room" element={<CheckRoom/>}/>
                </Route>
            </Routes>
            <Toaster/>
        </div>
    );
}

export default App;
