"use client"

import React, { useState } from 'react'

export const CartCounter = () => {


  const [counter, setCounter] = useState(5)

	return (
		<>
			<span className='text-9xl'> {counter} </span>

			<div className='flex'>
				<button
					onClick={() => setCounter(counter + 1)}
					className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all x-[100px] mr-2'>
					+1
				</button>
				<button
					onClick={() => setCounter(counter - 1)}
					className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all x-[100px] mr-2'>
					-1
				</button>
			</div>
		</>
	)
}
