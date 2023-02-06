import './index.css';
import React, { useState } from 'react';
import data from './data.json';

export default function QuizUnit() {
    const [checked, setChecked] = useState({});
    const [numChecked, setNumChecked] = useState(0);
    const [showRes, setshowRes] = useState(false);
    const [result, setResult] = useState('')

    // handles checkbox checking and option choices
    const handleCheck = (e) => {
        let change = 0;
        const target = e.target.value || e.currentTarget.children[0].value;
        const newChecked = { ...checked };
        // iterate the keys of the checked set
        // set checked to false for all other options
        // of the same question (with same key[0])
        Object.keys(newChecked).forEach((key) => {
            if (key !== target && key[key.length-2] === target[target.length-2]) {
                if (newChecked[key]) {
                    change--;
                };
                newChecked[key] = false;
            }
        });
        newChecked[target] = !newChecked[target];
        newChecked[target] ? setNumChecked(numChecked + change + 1) : setNumChecked(numChecked + change - 1);
        setChecked(newChecked);
    };

    // handles the click of result button
    const handleClick = (e) => {
        setshowRes((x) => !x);
        const score = [0, 0, 0, 0];
        Object.entries(checked).forEach((key) => {
            if (key[1]) {
                score[key[0].charCodeAt(key[0].length - 1) - 65]++;
            }
        });
        let idx = 0
        for (let i = 0; i < score.length; i++) {
            if (score[i] > score[idx]) idx = i;
        };
        setResult(data.results[idx]);
    }

    // keep track of the question number when populating
    let count = 0;

    // populate quiz unit components with data.json
    const quizunits = data.questions.map((questions) => {
        count++;
        return (
            <div className='quiz-section' key={count}>
                <h4>
                    {count}. {questions.prompt}
                </h4>
                {
                    Object.entries(questions.options).map((option) => {
                        return (
                            <div className={`quiz-unit 
                ${checked[`${count}${option[0]}`] ? 'quiz-unit-checked' : ''}
                ${showRes ? 'disabled' : ''}`} onClick={handleCheck} key={`${count}${option[0]}`}>
                                <input
                                    type='checkbox'
                                    value={`${count}${option[0]}`}
                                    checked={checked[`${count}${option[0]}`] || false}
                                    onChange={handleCheck}
                                    id={`${count}${option[0]}`}
                                    className='quiz-checkbox'
                                    key={`${count}${option[0]}`}
                                />
                                {option[0]}. {option[1]}
                            </div>
                        )
                    })
                }

            </div>
        );
    });

    return (
        <div className='quiz-section'>
            {quizunits}
            <br />
            <button className={`result-button ${(numChecked < data.questions.length) ? 'unchecked' : ''}`} onClick={handleClick}>{showRes ? 'Retake Quiz' : 'Show me my results!'}</button>
            {showRes && (
                <div className='result-text'>
                    <h3>Congradulations!</h3>
                    <p>{result}</p>
                </div>
            )
            }
        </div>
    );
}