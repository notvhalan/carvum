import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from './pages/HomePage';
import TreePage from './pages/TreePage';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tree" element={<TreePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

