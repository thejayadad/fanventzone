import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
    className='flex items-center justify-center h-16  text-gray-700'
    href={'/'}>
           <span class="text-3xl font-bold">OnlineFitnessZone</span>
 
    </Link>
  )
}

export default Logo