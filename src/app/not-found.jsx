import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-screen h-screen'>
            <div className='flex flex-col justify-center items-center  min-h-screen '>
                <h2 className='text-9xl text-slate-400 '>404</h2>
                <Link href="/" className='text-slate-300'>Return Home</Link>
            </div>
        </div>
    )
}