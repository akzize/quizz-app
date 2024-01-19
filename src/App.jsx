import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';

import './App.css'
import Home from './components/Home'
import About from './components/About'
import Quiz from './components/quiz';
import Result from './components/result';

function App() {
    const [quiz, setQuiz] = useState(true);

    const background = quiz
        ? 'url("/img/background.jpg")'
        : 'url("/img/Rectangle 3.jpg")';

    const appContainerStyle = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: 'black',
        backgroundImage: background,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    };

    return (
        <>
            <div className="app-container" style={appContainerStyle}>
                <BrowserRouter>
                    {quiz && (
                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <a className="navbar-brand ms-5 " href="#"><Link className="logo" to="/">QUIZ.</Link></a>
                                <div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link " aria-current="page" href="#"> <Link className="link" to="/">Home</Link></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#"><Link className="link" to="about">About</Link></a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link " href="#"><Link className="link" to="result">Result</Link></a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    )}
                    <div className="row">
                        <Routes>
                            <Route path="/" element={<Home quiz={quiz} setQuiz={setQuiz} />} />
                            <Route path="about" element={<About />} />

                        </Routes>
                    </div>
                    <Routes>
                        <Route path="quiz" element={<Quiz setQuiz={setQuiz} />} />
                        <Route path="result" element={<Result setQuiz={setQuiz} />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
