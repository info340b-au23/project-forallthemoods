import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './app.css';
import { HomePage } from './Homepage';
import { ReviewPage } from './Review';
import { SignUpPage } from './Signup';
import { QuizPage } from './Quiz';
import { NaviBar } from './Nav';
import { Footer } from './Footer';
import { PartyPage } from './Party';
import { NostalgicPage } from './Nostalgic';



function App(props) {
    
    return (
        <div>
            <NaviBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/quiz' element={<QuizPage />} />
                    <Route path='/review' element={<ReviewPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                </Routes>
            <Footer />
         </div>
    )
}

export default App;