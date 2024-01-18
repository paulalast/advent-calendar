import React, { useEffect, useState } from "react"
import adventData from "../../adventData"

const TaskModal = ({ isOpen, onSave, onClose, selectedDay, adventData }) => {
	const [task, setTask] = useState("")
	const [image, setImage] = useState("")
	const [day, setDay] = useState(selectedDay || 1)

	useEffect(() => {
		if (adventData[`day${day}`]) {
			setTask(adventData[`day${day}`].task)
			setImage(adventData[`day${day}`].imgTask || "")
		}
	}, [day, adventData])

	const handleImageChange = e => {
		const file = e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setImage(reader.result)
			}
			reader.readAsDataURL(file)
		}
	}
	const handleSave = () => {
		if (task.trim() === "") {
			alert("Uzupełnij pole!")
			return
		}
		onSave(day, task, image)
		onClose()
		setTask("")
		setImage("")
	}

	if (!isOpen) return null

	return (
		<div className='modal flex absolute flex-col justify-center items-center bg-red w-full p-10 rounded-3xl drop-shadow-lg font-semibold border-white border-8 border-dotted '>
			<div className='modal-content text-white flex flex-col justify-center items-center gap-5 w-full'>
				<button
					className='close absolute top-0 right-0 bg-transparent text-3xl hover:scale-105 transition-transform '
					onClick={onClose}
				>
					&times;
				</button>
				<div className='flex flex-col gap-2 w-full'>
					<label htmlFor='day-select'>Wybierz dzień:</label>
					<select
						value={day}
						onChange={e => setDay(e.target.value)}
						className='text-green'
					>
						{Array.from({ length: 24 }, (_, i) => (
							<option key={i + 1} value={i + 1}>
								Dzień {i + 1}
							</option>
						))}
					</select>
				</div>
				<div className='flex flex-col gap-2 w-full'>
					<label htmlFor='task-input'>Wpisz treść zadania:</label>
					<input
						type='text'
						value={task}
						onChange={e => setTask(e.target.value)}
						placeholder={adventData[`day${day}`]?.task || "Wpisz treść zadania"}
						className='p-2 w-full rounded-md text-green '
					/>
				</div>
				<div className='flex flex-col gap-2 w-full'>
					<label htmlFor='image-input'>Dodaj obrazek:</label>
					<input
						type='file'
						onChange={handleImageChange}
						className='p-2 w-full rounded-md text-green text-sm'
						id='image-input'
					/>
					<div className='w-full flex justify-center items-center py-2'>
						<img
							src={image || adventData[`day${day}`]?.imgTask}
							alt={image || adventData[`day${day}`]?.alt}
							className='flex justify-center z-20 w-1/3 shadow-md rounded-md'
						/>
					</div>
				</div>

				<button
					className='text-white bg-green hover:scale-105 transition-transform'
					onClick={handleSave}
				>
					Zapisz Zadanie
				</button>
			</div>
		</div>
	)
}

export default TaskModal
