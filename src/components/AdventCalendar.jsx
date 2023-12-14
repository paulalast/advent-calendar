import React, { useState } from "react"
import adventData from "../../adventData"
import AdventCalendarWindow from "./AdventCalendarWindow"
import Snowfall from "react-snowfall"
import { motion } from "framer-motion"

const AdventWindow = ({ src, alt, onOpen, isToday }) => {
	return (
		<button
			onClick={onOpen}
			className={`  w-[72px] h-[72px] hover:scale-105 transition-all shadow-sm shadow-amber-200 rounded-full flex relative justify-center items-center ${
				isToday ? " bg-[#F7C829] scale-105" : "bg-white/90"
			}`}
		>
			<motion.img
				animate={{ scale: 1.15, rotate: 10 }}
				transition={{
					duration: 1,
					repeat: Infinity,
					ease: "easeInOut",
					repeatType: "reverse",
				}}
				src={src}
				alt={alt}
				className='flex absolute object-cover w-9'
			/>
		</button>
	)
}

const currentDate = () => {
	return new Date().getDate()
}

const AdventCalendar = props => {
	const today = currentDate()
	const [selectedDay, setSelectedDay] = useState(null)
	const handleOpenDay = day => {
		setSelectedDay(day)
	}
	const handleReturn = () => {
		setSelectedDay(null)
	}
	const handleReturnToWelcome = () => {
		props.onReturnToWelcome()
	}

	if (selectedDay) {
		return <AdventCalendarWindow day={selectedDay} onReturn={handleReturn}  adventData={props.adventData}  />
	}

	return (
		<div className='container flex py-5 flex-col w-full min-h-screen justify-start gap-2 items-start bg-black/50 '>
			<Snowfall
				style={{
					left: "50%",
					transform: "translateX(-50%)",
					position: "absolute",
					width: "425px",
					height: "100vh",
					overflow: "hidden",
				}}
				snowflakeCount={900}
				radius={"13"}
			/>

			<div className='flex mx-auto  text-3xl  text-green  rounded-6xl font-headerFont uppercase  bg-white/90 rounded-3xl  w-11/12 shadow-inner '>
				<button
					onClick={handleReturnToWelcome}
					className='flex justify-center items-center gap-2 '
				>
					<motion.img
						animate={{ scale: 1.1, rotate: 3 }}
						transition={{
							duration: 1,
							repeat: Infinity,
							ease: "easeInOut",
							repeatType: "reverse",
						}}
						src='./icon.png'
						alt='powrót'
						className='w-1/5'
					/>
					<p className='w-full text-2xl uppercase lg:text-3xl'>
						Kalendarz Adwentowy
					</p>
				</button>
			</div>
			<div className='flex justify-center flex-wrap gap-3 md:gap-6 shadow-xl'>
				{Object.values(adventData).map((day, index) => (
					<AdventWindow
						key={index}
						src={day.src}
						alt={day.alt}
						onOpen={() => handleOpenDay(day)}
						isToday={today === day.id}
						updateTask={props.updateTask}
						// day={selectedDay}
						// onReturn={handleReturn}
						// adventData={props.adventData}
					/>
				))}
			</div>
		</div>
	)
}

export default AdventCalendar
