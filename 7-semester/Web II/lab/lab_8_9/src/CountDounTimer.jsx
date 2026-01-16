import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router'

function CountdownTimer() {
    const [seconds, setSeconds] = useState(10);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let intervalId;

        if (isRunning && seconds > 0) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            clearInterval(intervalId);
            setIsRunning(false);
        }


        return () => clearInterval(intervalId);

    }, [isRunning, seconds]);

    const handleReset = () => {
        setSeconds(10);
        setIsRunning(true);
    };

    return (

        <div>
            <button onClick={() => window.history.back()}>back</button>
            <br />
            <h2>Countdown: {seconds} seconds</h2>
            {seconds === 0 && <p> Time's Up!</p>}

            <button onClick={handleReset} disabled={isRunning}>
                Reset
            </button>
            <button onClick={() => setIsRunning(prev => !prev)}>
                {isRunning ? 'Pause' : 'Resume'}
            </button>
        </div>
    );
}

export default CountdownTimer;