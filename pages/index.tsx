import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {


    return (
        <>
        <div className="flex flex-row justify-center text-center mt-24 mx-2 py-4">
        <p className="text-5xl md:text-8xl py-4 font-bold"><span className="text-light-social">Cross Platform Link Sharing Card</span> <span className="text-deep-purple">Validator</span></p>
        </div>
        <div className="mx-2 flex justify-center text-center mt-16 gap-8">
            <Link href={'/twitter-validator'} >
            <button className="group flex border border-slate-200 text-deep-purple hover:bg-purple-200 py-2 text-center items-center justify-center gap-2 align-middle ease-in duration-200 transition-all px-6 rounded-lg"><span> Twitter Validator</span><span className="scale-0 translate-x-4 transition-all duration-200 opacity-0 group-hover:block group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0"><i className="ri-arrow-right-line"></i></span></button>
            </Link>
            <Link href={''}>
            <button className="bg-transparent border border-slate-100 text-deep-purple hover:bg-purple-200 py-2 px-6 rounded-lg">Share on Twitter</button>
            </Link>

        </div>
        </>
    )
}