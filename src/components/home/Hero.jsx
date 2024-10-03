import React from 'react'
import { MdVerified } from "react-icons/md";

export default function Hero() {
    return (
        <main className='flexCenter lg:flexBetween  lg:flex lg:items-start flex-col lg:flex-row h-full w-full pb-10 pt-10'>
            <div className="flexCenter lg:flexBetween lg:flex w-full lg:justify-start lg:items-start flex-col lg:pt-8 pb-5">
                <h6 className='text-base text-secondary uppercase font-[500]'>Simple project management tool</h6>
                <h1 className='text-5xl leading-[56px] py-3 text-dark max-lg:text-center font-extrabold lg:font-semibold'>The Easiest Way to Manage Your Projects.</h1>
                <p className='max-lg:text-center pt-3 text-gray-600 font-[400] max-w-[400px]'>Powerful project management tools for your companies of all sizes.</p>
                <div className="flex gap-3 items-center pt-8 pb-6">
                    <button className='py-3 px-4 bg-btn-gradient rounded-xl text-white'>Start Free Trial</button>
                    <button className='text-secondary underline'>Get a Live Demo</button>
                </div>
                <div className="max-lg:hidden flex gap-4">
                    <span className='flex gap-1 items-center'><MdVerified size={20} color='green' /> No Credit Card required </span>
                    <span className='flex gap-1 items-center'> <MdVerified size={20} color='green' /> No KNeed Previous knowledge </span>
                </div>
            </div>
            <div className="w-full">
                <figure>
                    <img src="/images/hero.png" alt="Hero Image" className='pointer-events-none select-none w-full lg:h-[35rem] xl:h-[40rem] lg:-mt-5 object-cover object-top' />
                </figure>
            </div>
        </main>
    )
}
