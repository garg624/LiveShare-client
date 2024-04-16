"use client"
import React, { useState } from 'react'
import logo from "../../../public/logo.png"
import Image from "next/image"
import Link from "next/link"
import { DialogCloseButton } from './ShareDialog'
import { IoSettingsOutline } from "react-icons/io5";
import NewEditor from './NewEditor'
import { Settings } from './Settings'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDownload } from "react-icons/ai";
import { useAtom } from 'jotai'
import { GiTireIronCross } from "react-icons/gi";
import { menuIsOpen } from "@/lib/atoms"
const NavBarEditor = () => {
  const [isOpen, setisOpen] = useAtom(menuIsOpen)

  const handleHambugerMenu = (e) => {
    e.preventDefault();
    setisOpen(!isOpen);
  }
  
  return (
    <div className=' flex justify-between bg-gradient-to-r from-indigo-500 via-blue-500 to-green-600 py-2'>
      <Link href='/'>
        <Image src={logo} alt="logo image for live share " width={200} height={200} className='object-fit' priority />
      </Link>
      <div className='self-center lg:flex md:flex hidden justify-center items-center lg:gap-4 md:gap-4  '>
        <NewEditor className="text-4xl  hover:bg-slate-300  rounded " iconSize={"text-4xl"} />
        <DialogCloseButton />
        <Settings />
      </div>

      {!isOpen ? <GiHamburgerMenu className='text-4xl lg:hidden md:hidden m-2' onClick={handleHambugerMenu} /> : <GiTireIronCross className='text-4xl m-2 lg:hidden md:hidden' onClick={handleHambugerMenu} />}



    </div>
  )
}

export default NavBarEditor