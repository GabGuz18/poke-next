import { CartCounter } from '@/shopping-cart'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Un simple contador'
}


const page = () => {

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Productos en el carrito</span>
      <CartCounter/>
    </div>
  )
}

export default page