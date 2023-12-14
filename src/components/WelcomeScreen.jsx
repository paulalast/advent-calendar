import { motion } from "framer-motion"
import React, { useState } from "react"
import Snowfall from "react-snowfall"
import TaskModal from "./TaskModal"

function WelcomeScreen({ onEnter, updateTask, day, adventData }) {
	const [isModalOpen, setModalOpen] = useState(false)
	const openModal = () => {
		setModalOpen(true)
	}
	const closeModal = () => {
		setModalOpen(false)
	}

	return (
		<div className='container mx-auto w-full flex flex-col  justify-center gap-8 items-center  '>
			<Snowfall
				style={{
					left: "50%",
					transform: "translateX(-50%)",
					position: "absolute",
					width: "425px",
					height: "100%",
				}}
				snowflakeCount={1200}
			/>
			<h1 className='text-4xl text-center p-3 text-black bg-white/90 rounded-3xl font-headerFont font-bold uppercase shadow-lg '>
				Kalendarz Adwentowy
			</h1>
			<button
				onClick={openModal}
				className='flex justify-center items-center absolute top-10 left-3 bg-green font-bold drop-shadow-md hover:scale-110 transition-transform text-white w-24 h-24 text-xs rounded-full'
			>
				Strefa Zadań Elfa
			</button>
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
					src='./belll.png'
					alt='wejdz'
					className='w-32'
				/>
			</button>
			<TaskModal
				isOpen={isModalOpen}
				onSave={updateTask}
				onClose={closeModal}
				selectedDay={day}
				adventData={adventData}
			/>
		</div>
	)
}

export default WelcomeScreen
