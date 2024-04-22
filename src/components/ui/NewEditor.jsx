"use client"
import { generateRandomString } from '@/app/helpers';
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { cn } from '@/lib/utils';
import Link from "next/link"
const NewEditor = ({iconSize,className}) => {
    const [newUrl, setNewUrl] = useState("");
    useEffect(() => {
        setNewUrl(`${process.env.CLIENT_DOMAIN_NAME}/${generateRandomString(6)}`)
        // console.log(newUrl)
    }, [])
    return (
        <Link  className={cn(" md:text-6xl lg:md:text-6xl inline",className)} href={newUrl}><FaPlus className={`${iconSize}`} /></Link>
    )
}

export default NewEditor