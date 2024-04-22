"use client"
import { generateRandomString } from '@/app/helpers';
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { cn } from '@/lib/utils';
import Link from "next/link"
import { usePathname } from 'next/navigation';
const NewEditor = ({iconSize,className}) => {
    const [newUrl, setNewUrl] = useState("");
    const pathname=usePathname();
    useEffect(() => {
        setNewUrl(`${pathname}${generateRandomString(6)}`)
        // console.log(newUrl)
    }, [])
    return (
        <Link  className={cn(" md:text-6xl lg:md:text-6xl inline",className)} href={newUrl}><FaPlus className={`${iconSize}`} /></Link>
    )
}

export default NewEditor