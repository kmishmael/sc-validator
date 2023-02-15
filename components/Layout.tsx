import { Heading } from "./header";
import { Footer } from "./Footer"; 
import { useState } from "react";

export default function Layout({ children }: {children: React.ReactNode}) {

    const [isMeta, setIsMeta] = useState(); 
   
    return(
        <>
        <Heading/>
        {children}
        <Footer />
        </>
    )
}