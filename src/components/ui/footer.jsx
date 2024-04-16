import logo from "../../../public/logo.png"
import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { BiCoffee } from "react-icons/bi";

import Link from "next/link";

const footer = () => {
  return (
    <footer className="footer p-2 bg-neutral-900 text-neutral-content flex flex-col lg:flex-row md:flex-row justify-center items-center gap-3">
      <aside className='flex flex-col items-center justify-center lg:w-1/2 md:w-1/2'>
        <Image src={logo} alt="logo" height={100} width={300} className='bg-black bg-clip-text' />
        <Link className="flex" href="#">
          <FaRegCopyright className="text-white inline text-2xl  self-center" />
          <p className="text-stone-400 text-xl lg:text-2xl">
            All rights reserved 2024
          </p>
        </Link>
      </aside>
      <div className="border-2 w-[90%] self-center lg:hidden md:hidden"></div>
      <nav className='flex flex-col items-center justify-center lg:w-1/2 md:w-1/2 gap-2'>
        <h6 className="footer-title text-slate-500 ">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <FaXTwitter className="text-white cursor-pointer"  />
          <FaInstagram className="text-white cursor-pointer" />
          <FaGithub className="text-white cursor-pointer" />
        </div>
        <Link className="flex " href="#">
          <BiCoffee className="text-white inline animate-pulse text-2xl  self-center" />
          <p className="text-stone-500 text-2xl">
            Buy me a cup of coffee..

          </p>
        </Link>



      </nav>
    </footer>

  )
}

export default footer