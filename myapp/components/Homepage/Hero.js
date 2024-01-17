import React from 'react'
import {Button} from "@nextui-org/react";
import {FiUser} from "react-icons/fi"
const Hero = () => {
  return (
   <section className='px-4 py-8 '>
    <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="../hero.png" />
        <div className='text-center lg:w-2/3 w-full'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                Online Fit Track Pro
            </h1>
            <p className='mb-8 leading-relaxed'>
            Embark on a wellness journey with FitTrack Pro, your premier online fitness tracking platform. Tailored for the modern fitness enthusiast, our site offers seamless tracking of your workouts, nutrition, and progress. Say goodbye to the mundane and embrace a dynamic lifestyle filled with personalized fitness plans, insightful analytics, and a supportive community. Unleash the best version of yourself with FitTrack Pro – where health meets innovation            
            </p>
            <div className='flex justify-center'>
            <Button size='lg' color="primary" variant="bordered" startContent={<FiUser/>}>
                Log In
            </Button>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Hero