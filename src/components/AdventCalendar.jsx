import React, { useState } from "react"
import adventData from "../../adventData"
import AdventCalendarWindow from "./AdventCalendarWindow"
import Snowfall from "react-snowfall"
import { motion, reverseEasing } from "framer-motion"

const AdventWindow = ({ src, alt, onOpen }) => {
	return (
		<button
			onClick={onOpen}
			className='bg-white/70 w-18 hover:bg-green hover:scale-105 transition-all shadow-md rounded-lg'
		>
			<motion.img
				animate={{ scale: 1.2, rotate: 10 }}
				transition={{
					duration: 1,
					repeat: Infinity,
					ease: "easeInOut",
					repeatType: "reverse",
				}}
				src={src}
				alt={alt}
				className='w-8'
			/>
		</button>
	)
}

const AdventCalendar = () => {
	const [selectedDay, setSelectedDay] = useState(null)
	const handleOpenDay = day => {
		setSelectedDay(day)
	}
	const handleReturn = () => {
		setSelectedDay(null)
	}
	if (selectedDay) {
		return <AdventCalendarWindow day={selectedDay} onReturn={handleReturn} />
	}
	return (
		<div className='flex  flex-col w-full h-screen justify-start gap-2 items-center bg-black/60 overflow-hidden'>
			<Snowfall
				style={{
					left: "50%",
					transform: "translateX(-50%)",
					position: "absolute",
					width: "425px",
					height: "100vh",
				}}
				snowflakeCount={700}
				radius={"13"}
			/>

			<h1 className='text-5xl  text-white  rounded-6xl font-headerFont uppercase  '>
				Kalendarz Adwentowy
			</h1>
			<div className='flex justify-center flex-wrap gap-4 shadow-xl'>
				{Object.values(adventData).map((day, index) => (
					<AdventWindow
						key={index}
						src={day.src}
						alt={day.alt}
						onOpen={() => handleOpenDay(day)}
					/>
				))}
			</div>
		</div>
	)
}

export default AdventCalendar
