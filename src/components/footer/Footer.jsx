import React from 'react'
import { profileLinks } from '../../utils';

export default function Footer() {
    return (
        <footer className='flexBetween h-full w-full py-4 '>
            <p>Build by Bulbul islam - bulbulhero63@gmail.com</p>
            <div className="flex gap-3 items-center">
                {
                    profileLinks.map((link) => (
                        <a key={link.id} href={`${link.link}`} ><span>{link.icon}</span></a>
                    ))
                }
            </div>
        </footer>
    )
}
