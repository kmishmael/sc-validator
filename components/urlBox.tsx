import { urlParser } from "@sc-validator/lib/urlParser";
import { useState } from "react"
import { metaData } from "@sc-validator/types";

export function UrlBox({ handleMeta }: any)
{
    const [query, setQuery] = useState<string>('');
    
    async function handleKeyPress(e: any){
        if(e.key === 'Enter'){
            let c: metaData = await (await fetch(`/api/getMeta/urlParser?url=${query}`)).json();
            handleMeta(c)
        }
    }

    return (
        <>
        <div className="w-full text-center">
            <div className="border border-blue-800 w-2/3 mx-auto -m-6 bg-white rounded-full px-3">
            <input type="text" placeholder="Enter URL" onKeyUp={(e) => handleKeyPress(e)} onChange={(e) => setQuery(e.target.value)} className="outline-none w-full bg-transparent p-3" />
            </div>
        </div>
        </>
    )
}