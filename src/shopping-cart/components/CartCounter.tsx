"use client"

import { useAppDispatch, useAppSelector } from '@/store'
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice'
import React, { useEffect, useState } from 'react'

interface Props {
	count: number
}

export const CartCounter = ({ count = 5 }: Props) => {

	const counter = useAppSelector( state => state.counter.count )
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch( initCounterState(count))
	}, [dispatch, count])
	

	return (
		<>
			<span className='text-9xl'> {counter} </span>

			<div className='flex'>
				<button
					onClick={() => dispatch( addOne() )}
					className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all x-[100px] mr-2'>
					+1
				</button>
				<button
					onClick={() => dispatch( substractOne() )}
					className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all x-[100px] mr-2'>
					-1
				</button>
			</div>
		</>
	)
}
