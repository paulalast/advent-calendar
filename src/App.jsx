import "./App.css"
import React, { useRef, useState } from "react"
import WelcomeScreen from "./components/WelcomeScreen"
import Calendar from "./components/AdventCalendar"
import { motion } from "framer-motion"

function App() {
    const [showCalendar, setShowCalendar] = useState(false);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(true);

    const handlePlayMusic = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play();
                setIsPlaying(true);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <div className='flex flex-col justify-evenly items-center relative h-screen'>
            {showCalendar ? (
                <Calendar onReturnToWelcome={() => setShowCalendar(false)} />
            ) : (
                <WelcomeScreen onEnter={() => setShowCalendar(true)} />
            )}
            <motion.button
                animate={{ scale: 1.2, rotate: 5 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse",
                }}
                onClick={handlePlayMusic}
                className='absolute bottom-0 w-32 h-32 bg-transparent'
            >
                <img src='./sound.png' alt={isPlaying ? 'pause' : 'play'} />
            </motion.button>
            <audio ref={audioRef} loop={isLooping}>
                <source src='./jingle.mp3' type='audio/mpeg' />
            </audio>
        </div>
    );
}

export default App;
