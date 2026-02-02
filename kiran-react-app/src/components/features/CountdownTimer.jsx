import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    // State for time remaining
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Internship end date: February 19, 2026
    const endDate = new Date('2026-02-19T23:59:59');

    // Calculate time remaining
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = endDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        } else {
            // Internship has ended
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };

    // Update countdown every second
    useEffect(() => {
        // Set initial time
        setTimeLeft(calculateTimeLeft());

        // Set up interval to update every second
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Cleanup function: clear interval when component unmounts
        return () => clearInterval(timer);
    }, []);

    // Check if internship has ended
    const isInternshipEnded = timeLeft.days === 0 && timeLeft.hours === 0 &&
                             timeLeft.minutes === 0 && timeLeft.seconds === 0;

    return (
        <div className="countdown-timer card shadow-sm">
            <div className="card-body text-center p-4">
                <h5 className="card-title mb-4">
                    <i className="bi bi-clock me-2 text-success"></i>
                    Internship Countdown
                </h5>

                {isInternshipEnded ? (
                    <div className="celebration">
                        <div className="text-success mb-3">
                            <i className="bi bi-trophy-fill fs-1"></i>
                        </div>
                        <h4 className="text-success mb-3">🎉 Internship Complete! 🎉</h4>
                        <p className="text-muted">Congratulations on completing your React internship journey!</p>
                    </div>
                ) : (
                    <div>
                        <p className="text-muted mb-4">Time remaining until internship ends</p>

                        {/* Countdown display */}
                        <div className="countdown-display d-flex justify-content-center gap-3 mb-3">
                            {/* Days */}
                            <div className="time-unit">
                                <div className="time-value display-4 fw-bold text-primary">
                                    {timeLeft.days.toString().padStart(2, '0')}
                                </div>
                                <div className="time-label text-muted small">Days</div>
                            </div>

                            {/* Hours */}
                            <div className="time-unit">
                                <div className="time-value display-4 fw-bold text-primary">
                                    {timeLeft.hours.toString().padStart(2, '0')}
                                </div>
                                <div className="time-label text-muted small">Hours</div>
                            </div>

                            {/* Minutes */}
                            <div className="time-unit">
                                <div className="time-value display-4 fw-bold text-primary">
                                    {timeLeft.minutes.toString().padStart(2, '0')}
                                </div>
                                <div className="time-label text-muted small">Minutes</div>
                            </div>

                            {/* Seconds */}
                            <div className="time-unit">
                                <div className="time-value display-4 fw-bold text-primary">
                                    {timeLeft.seconds.toString().padStart(2, '0')}
                                </div>
                                <div className="time-label text-muted small">Seconds</div>
                            </div>
                        </div>

                        {/* Progress message */}
                        <div className="progress-message">
                            {timeLeft.days > 7 ? (
                                <p className="text-muted small">Keep up the great work! 🚀</p>
                            ) : timeLeft.days > 1 ? (
                                <p className="text-warning small">Final stretch! Defense preparation time ⏰</p>
                            ) : (
                                <p className="text-danger small">Almost there! Final preparations 📚</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountdownTimer;