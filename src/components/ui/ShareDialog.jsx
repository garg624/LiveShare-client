"use client"
import { FaCopy } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";
import { LuCopyCheck } from "react-icons/lu";
import { MdOutlineScreenShare } from "react-icons/md";

export function DialogCloseButton() {
    const pathname=usePathname();
    const [shareLink,setShareLink]=useState("");
    const [isCopied, setIsCopied] = useState(false);

    const handleshare = (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(shareLink);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }; 
    
    useEffect(()=>{
      // console.log(pathname)
      // console.log(process.env.CLIENT_DOMAIN_NAME)
      setShareLink(process.env.CLIENT_DOMAIN_NAME+pathname);
      // console.log(shareLink);
    },[])

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-1"><MdOutlineScreenShare className="text-5xl"/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to edit this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={shareLink}
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            {!isCopied ? <FaCopy className="h-4 w-4" onClick={handleshare} /> : <LuCopyCheck className="h-4 w-4" />}
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
