import "./App.css"
import React, { useState } from "react"
import WelcomeScreen from "./components/WelcomeScreen"
import Calendar from "./components/AdventCalendar"

function App() {
	const [showCalendar, setShowCalendar] = useState(false)

	return (
		<div className='flex justify-center items-center '>
			{showCalendar ? (
				<Calendar onReturnToWelcome={() => setShowCalendar(false)} />
			) : (
				<WelcomeScreen onEnter={() => setShowCalendar(true)} />
			)}
		</div>
	)
}

export default App
