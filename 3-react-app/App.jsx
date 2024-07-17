import React from 'react';

import {useEffect} from "react";
import {initBox, setBGRed, setBGGreen, setBGBlue, setTextBold, setTextItalic, setTextStrike, setTextUnderline, resetStyle} from './script';
import "./public/styles.css"
const App = () => {
    useEffect(() => {
        initBox(4,4);
    },[])
    return (

        <div className='app-wrapper'>
            <div className='app-container'>
                <div className='grid-container'></div>
                <div className='control-container'>
                    <label>
                        <span>ID</span>
                        <input id="input-id"></input>
                    </label>
                    <button onClick={setBGRed}>Set BG red</button>
                    <button onClick={setBGGreen}>Set BG green</button>
                    <button onClick={setBGBlue}>Set BG blue</button>
                </div>
                <div className="control-container">
                    <label>
                        <span>class</span>
                        <input id="input-class"></input>
                    </label>
                    <button onClick={setTextBold}>Set text bold</button>
                    <button onClick={setTextItalic}>Set text italic</button>
                    <button onClick={setTextStrike}>Set text strike</button>
                    <button onClick={setTextUnderline}>Set text underline</button>
                </div>
                <div className="control-container">
                    <label>
                        <span>query</span>
                        <input id="input-query"></input>
                    </label>

                    <button onClick={resetStyle}>Reset style</button>
                </div>
            </div>
        </div>
    );
};

export default App;

