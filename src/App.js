import React from 'react';
import './App.css';
import LandingBio from './components/LandingPage';

const props = {
    title: 'Le Phuc Tai',
    subtitle: 'Software engineer',
};

function App() {
    return <LandingBio {...props} />;
}

export default App;
