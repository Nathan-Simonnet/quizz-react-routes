import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Thank from './Thank';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Thank" element={<Thank />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;