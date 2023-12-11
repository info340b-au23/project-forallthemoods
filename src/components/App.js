import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import '../app.css';
import { HomePage } from './Homepage';
import { ReviewPage } from './Review';
import { SignUpPage } from './Signup';
import { QuizPage } from './Quiz';
import { NaviBar } from './Nav';
import { Footer } from './Footer';
import { PartyPage } from './Party';
import { NostalgicPage } from './Nostalgic';
import { HeartbreakPage } from './Heartbreak';
import { ClubPage } from './Club';
import { HypedPage } from './Hyped';
import { CombinationPage } from './Combination';
import { MoodPage } from './Mood';


function App(props) {
    
    return (
        <div>
            <NaviBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/mood' element={<MoodPage />} />
                    <Route path='/quiz' element={<QuizPage />} />
                    <Route path='/review' element={<ReviewPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                    <Route path='/party' element={<PartyPage />} />
                    <Route path='/nostalgic' element={<NostalgicPage />} />
                    <Route path='/heartbreak' element={<HeartbreakPage />} />
                    <Route path='/club' element={<ClubPage />} />
                    <Route path='/hyped' element={<HypedPage />} />
                    <Route path='/combination' element={<CombinationPage />} />
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            <Footer />
         </div>
    )
}

export default App;