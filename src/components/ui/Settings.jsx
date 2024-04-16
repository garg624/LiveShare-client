import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { fontSizes, languages, themes } from "@/app/constants"
import { IoSettingsOutline } from "react-icons/io5"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from "@/components/ui/button"
  import {useAtom} from "jotai"
import { editorFontAtom, editorLanguageAtom, editorThemeAtom } from "@/lib/atoms"


export function Settings() {
  const [editorMode,setEditorMode] = useAtom(editorLanguageAtom)
  const [editorTheme,setEditorTheme] = useAtom(editorThemeAtom)
  const [editorFontSize,setEditorFontSize] = useAtom(editorFontAtom);
  
  const handleModeChange = (selected) => {
    setEditorMode(selected);
    // console.log(editorMode);
};

const handleThemeChange = (selected) => {
    setEditorTheme(selected);
    // console.log(editorTheme);
};

const handleFontSizeChange = (selected) => {
    // Convert the font size value to an integer
    // const size = parseInt(selected);
    setEditorFontSize(selected);
    // console.log(editorFontSize);
};

  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="self-center flex justify-center p-1"><IoSettingsOutline className='text-4xl' /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
    <Select onValueChange={handleModeChange} value={editorMode}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a Editor's mode   " />
        </SelectTrigger>
        <SelectContent>
             <SelectGroup>
                 <SelectLabel>Editor's mode</SelectLabel>
                        {languages.map((lang)=>(
                            <SelectItem key={lang.id.toString()} value={lang.language} >{lang.language}</SelectItem>
                        ))}
            </SelectGroup>
         </SelectContent>
    </Select>
          </DropdownMenuItem>
          <DropdownMenuItem>
    <Select value={editorTheme} onValueChange={handleThemeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a Editor's theme   " />
        </SelectTrigger>
        <SelectContent>
             <SelectGroup>
                 <SelectLabel>Editor's Theme</SelectLabel>
                        {themes.map((th)=>(
                            <SelectItem key={th.id} value={th.theme} >{th.theme}</SelectItem>
                        ))}
            </SelectGroup>
         </SelectContent>
    </Select>
          </DropdownMenuItem>
          <DropdownMenuItem>
    <Select value={editorFontSize} onValueChange={handleFontSizeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a Editor's Font   " />
        </SelectTrigger>
        <SelectContent>
             <SelectGroup>
                 <SelectLabel>Editor's Font</SelectLabel>
                        {fontSizes.map((ft)=>(
                            <SelectItem key={ft.id} value={ft.size} onClick={handleFontSizeChange}>{ft.size}</SelectItem>
                        ))}
            </SelectGroup>
         </SelectContent>
    </Select>
          </DropdownMenuItem>
         
        </DropdownMenuGroup>
        
     
      </DropdownMenuContent>
    </DropdownMenu>
</>
  )
}

// import React from 'react'

// const Settings = () => {
    //   return (
        //     <section className="flex flex-col justify-between items-center bg-white ">
//     <div className="">
//         <select className="ml-2 px-2 py-1  rounded focus:outline-none focus:ring focus:border-blue-300" onChange={handleModeChange} value={editorMode}>
//             {/* <option disabled selected>Pick the Editor's mode</option> */}
//             {languages.map((lang) => (
//                 <option key={lang.id} value={lang.language}>{lang.language}</option>
//             ))}

//         </select>
//     </div>

//     <div className=" mr-2">
//         <select className="ml-2 px-2 py-1  rounded focus:outline-none focus:ring focus:border-blue-300" onChange={handleThemeChange}
//             value={editorTheme}>
//             {/* <option disabled selected>Pick the Editor's Theme</option> */}
//             {themes.map((th) => (
//                 <option key={th.id} value={th.theme}>{th.theme}</option>
//             ))}
//         </select>
//     </div>
//     <div className=" mr-2">
//         <select className="ml-2 px-2 py-1  rounded focus:outline-none focus:ring focus:border-blue-300" onChange={handleFontSizeChange}
//             value={editorFontSize}>
//             {/* <option disabled selected>Pick the Editor font size</option> */}
//             {fontSizes.map((f)=>(
//                 <option key={f.id} value={f.size}>{f.size}</option>
//             ))}
            
//         </select>
//     </div>
// </section>
//   )
// }

// export default Settings