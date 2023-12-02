import "./App.css"
import React, { useState } from "react"
import WelcomeScreen from "./components/WelcomeScreen"
import Calendar from "./components/AdventCalendar"

function App() {
	const [showCalendar, setShowCalendar] = useState(false)

	return (
		<div className='w-full h-screen overflow-hidden flex justify-start items-start '>
			{showCalendar ? (
				<Calendar onReturnToWelcome={() => setShowCalendar(false)} />
			) : (
				<WelcomeScreen onEnter={() => setShowCalendar(true)} />
			)}
		</div>
	)
}

export default App
