import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from '../../utils';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            document.body.style.overflow = 'auto'; // Enable scroll
        }

        // Cleanup: reset overflow when the component unmounts or menu closes
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openMenu]);
    
    return (
        <header className='flexBetween sticky top-0 h-full w-full max-lg:py-5 xl:pl-0 xl:pr-0 mx-auto xl:max-w-[1200px] sm:px-20 px-5'>
            <div className="flex gap-2 items-center">
                <img src="/images/Logo.png" alt="Logo" className='h-9 flex gap-2 ' />
                <h4 className='text-3xl font-semibold text-dark'>
                    SaaSmito
                </h4>
            </div>
            <div className="max-lg:hidden">
                <ul className='flex gap-5 lg:gap-10 items-center'>
                    {navLinks.map((link) => (
                        <li key={link.id} className={`flex gap-1 cursor-pointer items-center ${link.title === 'Product' && 'border-t-4 rounded border-primary'} py-8`}>{link.title} <span><IoIosArrowDown size={18} /></span></li>
                    ))
                    }
                </ul>
            </div>
            <div className="flex gap-4 items-center max-lg:hidden">
                <button>Sign in</button>
                <button className='py-2 px-4 text-white rounded-md border bg-primary border-border'>Sign up</button>
            </div>
            <div className="lg:hidden">
                <button onClick={() => { setOpenMenu((prev) => !prev) }} className='p-2 text-white rounded-md border bg-primary border-border'><RxHamburgerMenu size={20} /></button>
            </div>

            <div className={`overflow-x-hidden lg:hidden fixed transition-all duration-300 ease-in-out ${openMenu ? "translate-x-0" : "translate-x-[140%]"} top-[5.3rem] left-0 h-[90vh] w-full bg-white px-5 md:px-14 py-5 `}>
                <div className="flex gap-4 items-center justify-end">
                    <button>Sign in</button>
                    <button className='py-2 px-4 text-white rounded-md border bg-primary border-border'>Sign up</button>
                </div>
                <div className="pt-4">
                    <ul className='flex gap-5 flex-col lg:gap-10 items-center'>
                        {navLinks.map((link) => (
                            <li key={link.id} className='flexBetween w-full gap-1 cursor-pointer hover:underline border-b py-3'>{link.title} <span><IoIosArrowDown size={18} /></span>
                            </li>
                        ))
                        }
                    </ul>

                </div>
            </div>
        </header >
    )
}
