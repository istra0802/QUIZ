// MovingButton.js
import React, { useState } from 'react';
// import '../scss/MovingButton'; // Import the SCSS file with animations

export default function MovingButton() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 500); // Duration of the animation
    };

    return (
        <div className="movingButton">
            <button onClick={handleClick} className={clicked ? 'movingButton_animation' : ''}>
                hi
            </button>
        </div>
    );
}
