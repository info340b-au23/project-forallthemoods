import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import { HomePage } from './Homepage';
import { ReviewPage } from './Review';
import { SignUpPage } from './Signup';
import { MoodPage } from './Mood';
import  EgmoodPage  from './Eg_mood';
import { QuizPage } from './Quiz';
import { NaviBar } from './Nav';
import { Header } from './Header';
import { Footer } from './Footer';



function App(props) {
    return (
        <div className='d-flex flex-column flex-fill'>
            <Header />
            <NaviBar />
            <div className='container-fluid'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/quiz' element={<QuizPage />} />
                    <Route path='/review' element={<ReviewPage />} />
                    <Route path='/mood' element={<MoodPage />} />
                    <Route path='/eg_mood' element={<EgmoodPage />} /> 
                    <Route path='/signup' element={<SignUpPage />} />
                </Routes>
            </div>
             <Footer />
         </div>
    )
}

export default App;

