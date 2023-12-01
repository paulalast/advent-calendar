import React from "react"
import adventData from "../assets/adventData"

const AdventWindow = ({ src, alt, onOpen }) => {
	return (
		<button onClick={onOpen} className="bg-white/80 w-18 hover:bg-green-800 transition-colors shadow-md rounded-lg">
			<img src={src} alt={alt} className="w-10"/>
		</button>
	)
}

const AdventCalendar = () => {
	const handleOpenDay = day => {
		console.log("Otwarto: ", day)
	}
	return (
		<div className='flex flex-col w-full h-screen justify-around items-center bg-black/80'>
			<h1 className='text-4xl p-3 text-white  rounded-3xl '>
				Kalendarz Adwentowy
			</h1>
			<div className="flex justify-center flex-wrap gap-4">
				{Object.values(adventData).map((day, index) => (
					<AdventWindow
						key={index}
						src={day.src}
						alt={day.alt}
						onOpen={() => handleOpenDay(day.id)}
					/>
				))}
			</div>
		</div>
	)
}

export default AdventCalendar
