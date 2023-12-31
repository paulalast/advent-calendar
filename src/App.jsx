import "./App.css"
import React, { useRef, useState } from "react"
import WelcomeScreen from "./components/WelcomeScreen"
import Calendar from "./components/AdventCalendar"
import { motion } from "framer-motion"
import adventData from "../adventData"

function App() {
	const [showCalendar, setShowCalendar] = useState(false)
	const audioRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isLooping, setIsLooping] = useState(true)

	const [adventDataState, setAdventDataState] = useState(adventData)

	const handlePlayMusic = () => {
		if (audioRef.current) {
			if (audioRef.current.paused) {
				audioRef.current.play()
				setIsPlaying(true)
			} else {
				audioRef.current.pause()
				setIsPlaying(false)
			}
		}
	}
	const updateTask = (dayId, newTask, newImgTask) => {
		setAdventDataState(prevData => {
			const updatedData = {
				...prevData,
				[`day${dayId}`]: {
					...prevData[`day${dayId}`],
					task: newTask,
					imgTask: newImgTask,
				},
			}
			console.log(updatedData)
			return updatedData
		})
	}
	return (
		<div className='flex flex-col justify-evenly items-center relative h-screen '>
			{showCalendar ? (
				<Calendar
					onReturnToWelcome={() => setShowCalendar(false)}
					updateTask={updateTask}
					adventData={adventDataState}
				/>
			) : (
				<WelcomeScreen
					onEnter={() => setShowCalendar(true)}
					updateTask={updateTask}
					adventData={adventDataState}
				/>
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
				className='absolute top-5 right-2 w-20 h-20 bg-transparent'
			>
				<img src='./sound.png' alt={isPlaying ? "pause" : "play"} />
			</motion.button>
			<audio ref={audioRef} loop={isLooping}>
				<source src='./jingle.mp3' type='audio/mpeg' />
			</audio>
		</div>
	)
}

export default App
