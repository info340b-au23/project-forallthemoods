import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import { HomePage } from './homepage';
import { ReviewPage } from './review';
import { SignUpPage } from './sign-up';
import { MoodPage } from './mood';
import { egmoodPage } from './eg_mood';



function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/quiz' element={<QuizPage />} />
                <Route path='/review' element={<ReviewPage />} />
                <Route path='/mood' element={<MoodPage />} />
                <Route path='/eg_mood' element={<egmoodPage />} /> 
                <Route path='/sign-up' element={<SignUpPage />} />

            </Routes>
        </div>
    )
}

export default App;

