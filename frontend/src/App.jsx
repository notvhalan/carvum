import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from './pages/HomePage';
import TreePage from './pages/TreePage';
import MentalMath from './pages/MentalMath';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tree" element={<TreePage />} />
                    <Route path="/mentalmath" element={<MentalMath />} />
                    <Route path="/privacyc" element={<PrivacyPolicy />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

