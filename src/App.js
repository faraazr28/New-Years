// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery';
import Timeline from './Timeline';
import Wrapped from './Wrapped';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="header">
                    <div className="header-content">
                        <h1>PUFF WRAPPED 2025</h1>
                        <h2>Thank you for being the best thing to happen to me this year :)</h2>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li><Link to="/">Gallery</Link></li>
                            <li><Link to="/timeline">Timeline</Link></li>
                            <li><Link to="/wrapped">Wrapped</Link></li>
                        </ul>
                    </nav>
                </header>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Gallery />} />  
                        <Route path="/timeline" element={<Timeline />} />
                        <Route path="/wrapped" element={<Wrapped />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
