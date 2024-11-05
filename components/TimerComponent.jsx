import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimerComponent = ({interval=180, resetTimer=false, setResetTimer,onComplete}) => {
    const [timeLeft, setTimeLeft] = useState(interval);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft <= 1) {
                        clearInterval(timer);
                        setIsRunning(false);
                        setTimeout(() => onComplete(), 0);
                        return 0;
                    }
                    return prevTimeLeft - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isRunning]);

    const handleResetTimer = () => {
        setTimeLeft(180); 
        setIsRunning(true); 
    };

    useEffect(() => {
        resetTimer && handleResetTimer();
        setResetTimer(false);
    }, [resetTimer]);


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (<Text style={styles.timerText}>{formatTime(timeLeft)}</Text>);
};

const styles = StyleSheet.create({
    timerText: {
        // fontSize: 20,
        // fontWeight: 'bold',
    },
});

export default TimerComponent;
