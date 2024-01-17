import React from 'react'
import Logo from '../Logo'
import ThemeToggle from '../Buttons/ThemeToggle'
import AuthLinks from './AuthLinks'

const TopNavBar = () => {
  return (
    <header className='flex w-full items-center justify-between p-4 px-8 h-[100px] max-w-screen-xl mx-auto'>
        <Logo />
        <div className='flex gap-4 items-center'>
            <ThemeToggle />
            <AuthLinks />
        </div>
    </header>
  )
}

export default TopNavBar