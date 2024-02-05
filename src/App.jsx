import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Thank from './components/Thank';

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