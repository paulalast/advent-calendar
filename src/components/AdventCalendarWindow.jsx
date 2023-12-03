import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Snowfall from "react-snowfall"

const AdventCalendarWindow = ({ day, onReturn }) => {
	const controls = useAnimation()

	useEffect(() => {
		controls.start({ y: ["0%", "25%", "-10%"], x: "0%" })
	}, [controls])

	const handleHoverStart = () => {
		controls.stop()
	}

	const handleHoverEnd = () => {
		controls.start({ y: ["0%", "25%", "-10%"], x: "-70%" })
	}


	return (
		<div className=' flex w-full flex-col  py-2 justify-center items-center text-red gap-2 font-headerFont font-extrabold'>
			<Snowfall
				style={{
					left: "50%",
					transform: "translateX(-50%)",
					position: "absolute",
					width: "425px",
					height: "100vh",
                   
				}}
			/>
			<div className='flex justify-center items-center shadow-xl rounded-full w-24 h-24 bg-white border-green border-4'>
				<h4 className='text-6xl tracking-normal'>{day.id}</h4>
			</div>
			<div className='w-full flex flex-col justify-center items-center   '>
				<div className='border-white border-8  flex flex-col justify-center items-center gap-6  bg-green py-16 rounded-xl shadow-md font-[600] h-[430px] w-[290px]'>
					<h3 className='text-2xl uppercase text-red bg-white p-2  text-center w-full'>
						Zadanie
					</h3>
					<p className='text-white text-2xl py-2 px-2 w-11/12 text-center'>{day.task}</p>
					<img src={day.imgTask} alt={day.alt} className='w-36' />
				</div>
				<button
					onClick={onReturn}
					className=' flex justify-end bg-transparent hover:scale-125 hover:text-white  text-white transition-all  uppercase'
				>
					<motion.img
						src='./train.png'
						alt='powrót'
						className='w-48 '
						whileHover={{ scale: 1.05, rotate: 2 }}
						animate={controls}
						initial={{ y: 0, x: 0 }}
						onHoverStart={handleHoverStart}
						onHoverEnd={handleHoverEnd}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
							repeatType: "reverse",
						}}
					/>
				</button>
			</div>
		</div>
	)
}

export default AdventCalendarWindow
