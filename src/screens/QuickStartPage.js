import React, { useState } from 'react';
import "../scss/QuickStartPage.scss";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Question from "../components/QuickStartPage/Question";
import QuizHeader from "../components/QuickStartPage/QuickHeader";
import GoogleAd from '../components/GoogleAd';
import ListSection from '../components/Login/ListSection';


export default function QuickStartPage() {
    const [buttonStates, setButtonStates] = useState({
        1: false,
        2: false,
        3: false,
        4: false
    }); // State to track the active state of each button

    const navigate = useNavigate(); 

    const handleButtonClick = (buttonIndex) => {
        setButtonStates(prevState => ({
            ...prevState,
            [buttonIndex]: true
        }));
    };

    navigate("/home")
    
    return (
        <div className='page-container'>
            <GoogleAd />
            <QuizHeader />

            <div>
                <div className='quiz-card-body'>
                    <Question />
                    <h3 className='quiz-que'>
                        ‘Ansett’ is the name of the domestic airline of which of the following countries?
                    </h3>

                    <ul className='quiz-answer-list'>
                        <li className='quiz-answers'>
                            <button className={`quiz-button ${buttonStates[1] ? 'slide quiz-answer-incorrect' : ''}`} onClick={() => handleButtonClick(1)}> New Zealand</button>
                        </li>
                        <li className='quiz-answers'>
                            <button className={`quiz-button ${buttonStates[2] ? 'slide quiz-answer-incorrect' : ''}`} onClick={() => handleButtonClick(2)}>New Zealand</button>
                        </li>
                        <li className='quiz-answers'>
                            <button className={`quiz-button ${buttonStates[3] ? 'slide quiz-answer-incorrect' : ''}`} onClick={() => handleButtonClick(3)}>New Zealand</button>
                        </li>
                        <li className='quiz-answers'>
                            <button className={`quiz-button ${buttonStates[4] ? 'slide quiz-answer-incorrect' : ''}`} onClick={() => handleButtonClick(4)}>New Zealand</button>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="fun-fact">
                <h4
                    className="fact-heading"
                    style={{ fontSize: "16px", fontFamily: "system-ui" }}
                >
                    #Fun Fact
                </h4>
                <p className="fact" style={{ paddingBottom: "0px" }}>
                    The first match was played between Royal Challengers Bangalore (RCB)
                    and KKR in 2008.
                </p>
            </div>
            <ListSection />
        </div>
    );
}
