import { SimpleWidget, WidgetsGrid } from '@/components'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'This is the admin dashboard'
}

const page = () => {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>Informacion general</span>
      <WidgetsGrid />
    </div>
  )
}

export default page