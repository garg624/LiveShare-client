import Image from "next/image"
import logo from "../../public/logo.png"
import NewEditor from "@/components/ui/NewEditor";
import bg from "../../public/bg_final_final.png"
export default function Home() {

  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-5 md:gap-8 text-white border-2 border-black">
        <Image src={bg} alt="Background for the live share home page" className="-z-50 brightness-50 bg-fixed" fill priority />
        <Image src={logo} alt="logo" className="mt-32" />
        <div className="  tracking-widest uppercase text-orange-400 font-bold text-5xl text-center">
          Share Code in real-time at ease
        </div>
        <div className="antialiased tracking-wider text-10xl lg:text-4xl md:text-6xl lg:md:text-7xl inline text-center m-2 text-gray-400 text-pretty ">
          A online code editor that lets you share your code with others and collaborate
        </div>
        <div className="flex ">
          <p className="text-6xl p-4 self-center hidden md:inline lg:inline">
            Create new code playground
          </p>
          <NewEditor className="text-  p-3 self-center animate-pulse " iconSize={"text-9xl md:text-7xl lg:md:text-7xl inline p-2 bg-grey"} />
        </div>
      </main>

    </>
  );
}
