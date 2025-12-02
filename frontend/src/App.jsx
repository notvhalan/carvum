import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from './pages/HomePage';
import TreePage from './pages/TreePage';
import MentalMath from './pages/MentalMath';
import PrivacyPolicy from './pages/PrivacyPolicy';
import EmpathyticsPolicy from './pages/EmpathyticsPolicy';
import ShortVideoHiderPolicy from './pages/ShortVideoHiderPolicy';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tree" element={<TreePage />} />
                    <Route path="/mentalmath" element={<MentalMath />} />
                    <Route path="/privacyc" element={<PrivacyPolicy />} />
                    <Route path="/empathticspolicy" element={<EmpathyticsPolicy />} />
                    <Route path="/shortvideohiderpolicy" element={<ShortVideoHiderPolicy />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

