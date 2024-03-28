import React, { useState } from 'react';
import "../scss/QuickStartPage.scss";

export default function QuickStartPage() {
    const [buttonColor, setButtonColor] = useState('#fff'); // Initial button color
    const [buttonTextColor, setButtonTextColor] = useState('#282d93'); // Initial button text color

    const handleButtonClick = () => {
        // Toggle button color and text color
        setButtonColor(buttonColor === '#fff' ? '#ff0000' : '#fff');
        setButtonTextColor(buttonColor === '#fff' ? '#fff' : '#282d93');

        // Toggle slide animation class
        document.querySelector('.quiz-button').classList.toggle('slide');
    };

    return (
        <div className='page-container'>
            <div className='google-ad'>
                <span className='google-sponsored'></span>
                <div style={{ width: "100%" }}></div>
            </div>

            <div className='quiz-card-header'>
                <h2 className='quiz-heading'>Quick Start!</h2>
                <p className='quiz-heading-text'>Answer 2 questions and win upto 200 coins.</p>
            </div>

            <div>
                <div className='quiz-card-body'>
                    <div className='quiz-body-question'>
                        <div className='quiz-q-heading'>
                            <div><span>1</span><span>/</span><span><strong>2</strong></span></div>
                            <div className='quiz-text'> Question </div>
                        </div>
                    </div>

                    <h3 className='quiz-que'>
                        ‘Ansett’ is the name of the domestic airline of which of the following countries?
                    </h3>

                    <ul className='quiz-answer-list'>
                        <li className='quiz-answers'>
                            <button className='quiz-button' style={{ backgroundColor: buttonColor, color: buttonTextColor }} onClick={handleButtonClick}> New Zealand</button>
                        </li>
                        <li className='quiz-answers'>
                            <button className='quiz-button'>New Zealand</button>
                        </li>
                        <li className='quiz-answers'>
                            <button className='quiz-button'>New Zealand</button>
                        </li>
                        <li className='quiz-answers'>
                            <button className='quiz-button'>New Zealand</button>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}
