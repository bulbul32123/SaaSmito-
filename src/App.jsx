import React from 'react'
import Header from './components/header/Header'
import Hero from './components/home/Hero'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <div className="h-full w-full relative">
      <div className="border-b ">
        <Header />
      </div>
      <div className="px-8 mx-auto xl:max-w-[1200px] sm:px-20 xl:pl-0 xl:pr-0 w-full h-full">
        <Hero />
        <Footer />
      </div>
    </div>
  )
}
