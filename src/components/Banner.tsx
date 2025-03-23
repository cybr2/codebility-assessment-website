import { useState, useEffect } from "react";

export const Banner = () => {
    const [time, setTime] = useState(480); // 8:00 in seconds

    useEffect(() => {
        if (time <= 0) return setTime(480);

        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="w-full h-8">
            <div className="bg-[#2323FE] flex font-bold justify-center text-white text-sm p-2 top-0 w-full fixed z-50">
                <p>
                    30% <span className="uppercase">off</span> if you order in the next {formatTime(time)}
                </p>
            </div>
        </div>
    );
};
