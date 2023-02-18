import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
//import{ SunIcon , MoonIcon } from "@heroicons/react/solid";

export function Heading(){
   const { systemTheme, theme, setTheme } = useTheme();
   // to avoid hydration mismatch
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
    setMounted(true);
   }, [])

   const renderThemeChanger = () => {
    
    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if(currentTheme === "dark"){
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" role="button" onClick={() => setTheme('light')} >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>

        )
    } else {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 " role={"button"} onClick={() => setTheme('dark')}>
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
            </svg>

        )
    }

   };

    return (
        <>
        <div className="w-full h-10 px-6 py-6 flex flex-row justify-center">

            <div className="w-2/3 flex flex-row justify-between">
            <div className="relative h-fit">
            <div className="flex flex-row gap-2 text-light-social font-normal text-lg h-fit items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>

                <p className="hidden sm:block font-normal ">Social Card Validator</p>
            </div>
            <span className="uppercase absolute left-full bottom-1/2 text-sm border-deep-purple text-deep-purple px-2 rounded-full border-2" style={{}}>Beta</span>

            </div>


            {renderThemeChanger()}
            </div>
        </div>
        </>
    )

}