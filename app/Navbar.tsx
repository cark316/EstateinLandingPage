import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    const navbarContainer = 'flex flex-row justify-between items-center h-[99px] pr-[162px] pl-[162px] pt-[20px] pb-[20px] bg-[#1A1A1A] text-white text-[18px] font-medium border border-[#262626]'
    const navbarLogo = 'flex flex-row items-center'
    const navbarLinks = 'flex flex-row items-center'
    const navbarBtn = 'border border-[#262626] bg-[#141414] pt-[14px] pb-[14px] pr-[24px] pl-[24px] rounded-[10px] mr-[30px]'

  return (
    <nav className={navbarContainer}>
            <ul className={navbarLogo}>
                <li className='pr-[10px]'>
                    <Image src='/Symbol.svg' alt='logo' width={48} height={48} />
                </li>
                <li>
                    <Image src='/Text.svg' alt='text' width={102} height={21} />
                </li>
            </ul>
            <ul className={navbarLinks}>
                <button className={navbarBtn}>
                    Home
                </button>
                <li className='mr-[30px]'>
                    About
                </li>
                <li className='mr-[30px]'>
                    Properties
                </li>
                <li>
                    Services
                </li>
            </ul>
            <ul>
                <button className={navbarBtn}>
                    Contact us
                </button>
            </ul>
    </nav>
  )
}

export default Navbar