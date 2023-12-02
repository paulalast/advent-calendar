import React, { useState } from "react"
import adventData from "../../adventData"
import AdventCalendarWindow from "./AdventCalendarWindow"
import Snowfall from "react-snowfall"
import { motion } from "framer-motion"

const AdventWindow = ({ src, alt, onOpen }) => {
	return (
		<button
			onClick={onOpen}
			className='bg-white/90 w-[76px] h-[76px] hover:bg-green hover:scale-105 transition-all shadow-md rounded-full flex relative justify-center items-center'
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

const AdventCalendar = props => {
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
		return (
			<AdventCalendarWindow
				day={selectedDay}
				onReturn={handleReturn}
			/>
		)
	}
	if (selectedDay) {
		return <AdventCalendarWindow day={selectedDay} onReturn={handleReturn} />
	}
	return (
		<div className='flex max-h-screen h-full py-5 flex-col w-full justify-start gap-2 items-center bg-black/50 '>
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

			<div className='flex mx-auto justify-center items-center text-3xl  text-green  rounded-6xl font-headerFont uppercase  bg-white/90 rounded-3xl w-10/12 shadow-inner '>
				<button onClick={handleReturnToWelcome} className='flex justify-center items-center gap-2 '>
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
					<p className='w-full text-3xl uppercase'>Kalendarz Adwentowy</p>
				</button>
			</div>
			<div className='flex justify-center flex-wrap gap-3 shadow-xl'>
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
