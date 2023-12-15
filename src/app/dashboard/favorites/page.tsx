
import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Pokemons favoritos'
}



const page = async () => {

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>Listado de pokemons favoritos<small className='text-blue-500'>Global state</small></span>
      <PokemonGrid pokemons={ [] }/>
    </div>
  )
}

export default page