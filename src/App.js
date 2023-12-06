import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import { HomePage } from './homepage';
import { ReviewPage } from './Review';
import { SignUpPage } from './Signup';
import { MoodPage } from './Mood';
import  EgmoodPage  from './eg_mood';
import { QuizPage } from './Quiz';
import { NaviBar } from './Nav';



function App(props) {
    return (
        <div>
            <NaviBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/quiz' element={<QuizPage />} />
                <Route path='/review' element={<ReviewPage />} />
                <Route path='/mood' element={<MoodPage />} />
                <Route path='/eg_mood' element={<EgmoodPage />} /> 
                <Route path='/signup' element={<SignUpPage />} />
            </Routes>
            
        </div>
    )
}

export default App;

