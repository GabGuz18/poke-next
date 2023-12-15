
import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: 'Pokedex',
  description: '151 pokemons'
}

const getPokemons = async ( limit = 20, offset = 0):Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then( res => res.json())

    const pokemons = data.results.map( pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name
    }))

    return pokemons
}

const page = async () => {

  const pokemons = await getPokemons(151)

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>Listado de pokemons <small className='text-blue-500'>estatico</small></span>
      <PokemonGrid pokemons={ pokemons }/>
    </div>
  )
}

export default page