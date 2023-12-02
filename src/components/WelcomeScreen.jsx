import { motion } from "framer-motion"
import React from "react"
import Snowfall from "react-snowfall"

function WelcomeScreen({ onEnter }) {
	return (
		<div className='flex flex-col w-full h-full justify-center gap-8 items-center '>
			<Snowfall
				style={{
					left: "50%",
					transform: "translateX(-50%)",
					position: "absolute",
					width: "425px",
					height: "100vh",
				}}
				snowflakeCount={800}
			/>
			<h1 className='text-4xl p-3 text-black bg-white/90 rounded-3xl font-headerFont font-bold uppercase shadow-lg'>
				Kalendarz Adwentowy
			</h1>

			<button
				onClick={onEnter}
				className=' text-xl  rounded-full  hover:scale-105  transition-transform'
			>
				<motion.img
					animate={{ scale: 1.2, rotate: 10 }}
					transition={{
						duration: 1,
						repeat: Infinity,
						ease: "easeInOut",
						repeatType: "reverse",
					}}
					src='./../belll.png'
					alt='wejdz'
					className='w-32'
				/>
			</button>
		</div>
	)
}

export default WelcomeScreen
