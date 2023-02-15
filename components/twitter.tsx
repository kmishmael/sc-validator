import { metaData } from "@sc-validator/types"
import { useState } from "react"

export function TwitterCard(/*{meta}: {meta: metaData | undefined}*/){
    //const [metadata, setMetadata] = useState<metaData | undefined>(meta);
    //console.log(meta);
    let meta: metaData = {
        "url": "https://siliconvoyage.com/blog/a-complete-guide-to-intel-processors-naming-conventions",
        "url_host": "siliconvoyage.com",
        "title": "A Complete Guide To Intel Processors Naming Convention",
        "description": "It has been producing some of the leading CPUs in the market. Here is intel CPU Branding letter and numbers guide.",
        "twitter_card": "summary",
        "twitter_site": "@siliconvoyage",
        "twitter_title": "A Complete Guide To Intel Processors Naming Convention",
        "twitter_description": "It has been producing some of the leading CPUs in the market. Here is intel CPU Branding letter and numbers guide.",
        "twitter_image": "https://siliconvoyage.com/blog/a-complete-guide-to-intel-processors-naming-conventions/img/a-complete-guide-featured.webp",
        "graph_title": "A Complete Guide To Intel Processors Naming Convention",
        "graph_type": "article",
        "graph_url": "https://siliconvoyage.com/blog/a-complete-guide-to-intel-processors-naming-conventions/",
        "graph_image": "https://siliconvoyage.com/blog/a-complete-guide-to-intel-processors-naming-conventions/img/a-complete-guide-featured.webp",
        "graph_description": "It has been producing some of the leading CPUs in the market. Here is intel CPU Branding letter and numbers guide."
    }

    return (

            <>
            { meta ? (
                <div className="text-center px-2">
                    <div className="w-full sm:w-4/5 md:w-1/2 mx-auto border flex flex-row rounded-md h-24 sm:h-32 overflow-hidden border-gray-400">
                        <div className="w-24 sm:w-32 h-full">
                            <img src={meta.twitter_image} alt="" className="h-full w-full object-cover" />    
                        </div>

                        <div className="flex flex-col flex-auto w-2/3 md:w-3/4 pl-3 text-left content-center justify-center">
                            <div>
                                <p className="text-gray-500 text-xs">{meta.url_host}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-sm sm:text-base text-ellipsis break-normal truncate">{meta.twitter_title}</p>
                            </div>
                            <div>
                 
                                <p className="text-gray-500 text-sm sm:text-base" id="twitter-desc">{meta.twitter_description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<></>) }
            
            { meta ? (
                <div className="text-center my-8 px-2">
                    <div className="w-full sm:w-4/5 md:w-1/2 mx-auto border flex flex-col rounded-md overflow-hidden border-gray-400">
                        <div className="w-full h-64">
                            <img src={meta.twitter_image} alt="" className="h-full w-full object-cover" />    
                        </div>

                        <div className="flex flex-col w-full pl-3 text-left content-center justify-center my-2">
                            <div>
                                <p className="text-gray-500 text-sm">{meta.url_host}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-base text-ellipsis break-normal truncate">{meta.twitter_title}</p>
                            </div>
                            <div>
                 
                                <p className="text-gray-500 text-base" id="twitter-desc">{meta.twitter_description}</p>
                            </div>
                        </div>
            
                    </div>
                </div>
            ) : (<></>) }
            
            { meta ? (
                <div className="text-center px-2">
                    <div className="w-full sm:w-4/5 md:w-1/2 mx-auto border flex flex-row rounded-md h-24 sm:h-32 overflow-hidden border-gray-400 pr-1">
                        <div className="w-1/4 h-full flex justify-center bg-gray-100 border-r border-gray-400">
                            <img src='/twitter-no-image.svg' alt="" className="w-1/3 h-1/3 m-auto object-cover" />    
                        </div>

                        <div className="flex flex-col w-3/4 pl-3 text-left content-center justify-center">
                            <div>
                                <p className="text-gray-500 text-sm">{meta.url_host}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-base text-ellipsis break-normal truncate">{meta.twitter_title}</p>
                            </div>
                            <div>
                 
                                <p className="text-gray-500 text-base" id="twitter-desc">{meta.twitter_description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<></>) }
            
            { meta ? (
                <div className="text-center my-6 px-2">
                    <div className="w-full sm:w-4/5 md:w-1/2 mx-auto border flex flex-row rounded-md h-24 sm:h-32 overflow-hidden border-gray-400 pr-1">
                        <div className="w-1/4 h-full flex justify-center bg-gray-100 border-r border-gray-400">
                            <img src='/twitter-no-image.svg' alt="" className="w-1/3 h-1/3 m-auto object-cover" />    
                        </div>

                        <div className="flex flex-col w-3/4 pl-3 text-left content-center justify-center">
                            <div>
                                <p className="text-gray-500 text-sm">{meta.url_host}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-base text-ellipsis break-normal">{meta.twitter_title}</p>
                            </div>
                            {/*
                            <div>
                                <p className="text-gray-500 text-base" id="twitter-desc">{meta.twitter_description}</p>
                            </div>
            */}
                        </div>
                    </div>
                </div>
            ) : (<></>) }
            
        </>
    )
}