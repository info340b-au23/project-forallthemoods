import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import { HomePage } from './homepage';
import { ReviewPage } from './review';
import { SignUpPage } from './signup';
import { MoodPage } from './mood';
import  EgmoodPage  from './eg_mood';
import { QuizPage } from './quiz';
import { NaviBar } from './nav';



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

