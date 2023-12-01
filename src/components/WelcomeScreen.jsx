import React from "react"

function WelcomeScreen({ onEnter }) {
	return (
		<div className='flex flex-col w-full h-screen justify-around items-center '>
			<h1 className='text-4xl p-3 text-black bg-white/80 rounded-3xl '>
				Kalendarz Adwentowy
			</h1>

			<button
				onClick={onEnter}
				className=' text-xl bg-green-900 text-white shadow-lg hover:bg-green-600  transition-colors'
			>
				Wejdź
			</button>
		</div>
	)
}

export default WelcomeScreen
