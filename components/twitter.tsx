import { metaData } from "@sc-validator/types"
import { useState } from "react"

export function TwitterCard({meta}: {meta: metaData}){
    //const [metadata, setMetadata] = useState<metaData | undefined>(meta);
    //console.log(meta);
    const [ui, setUI] = useState<Number>(); 
    let description: string |undefined;
    let title: string |undefined;
    let imageUrl: string |undefined;
    let cardType: string | undefined;
    let urlHost: string |undefined;
   
    let TEST_SAMPLE_DATA: metaData = {
        "status": 200,
        "no_of_tags": 22,
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

    /**
     * 1 - summary - all present
     * 2 - summary - description absent
     * 3 - summary - no image available
     * 4 - summary -large
    
    */
    if(meta.twitter_card && meta.twitter_card != null){
        cardType = meta.twitter_card;
    } else {
        // card Type not provided, No card will be rendered
       // return;
    }

    if(meta.twitter_title && meta.twitter_title != null){
        title = meta.twitter_title
    } else if (meta.graph_title && meta.graph_title != null){
        title = meta.graph_title
    } else {
        // Title not present
        //return;
    }
    
    if(meta.twitter_image && meta.twitter_image != null){
        imageUrl = meta.twitter_image
    } else if (meta.graph_image && meta.graph_image != null){
        imageUrl = meta.graph_image
    } else {
        // image is not preset
        
    }

    if(meta.twitter_description && meta.twitter_description != null){
        description = meta.twitter_description
    } else if(meta.graph_description && meta.graph_description != null){
        description = meta.graph_description
    } else {
        // description not present
    }


    return (

            <>

            { (title) ?
             (<>
             {
                (cardType) ? (
                <>

                {
                    (cardType == 'summary' || (cardType == 'summary_large_image' && !imageUrl)) ? 
                    (
                    <>
                    <div className="text-center my-8 px-2 flex justify-center">
                        <div className="w-full sm:w-9/12 md:w-1/2 lg:w-2/5 mx-2 border flex flex-row rounded-md h-24 sm:h-32 overflow-hidden border-slate-300 dark:border-slate-700">
                                {
                                    (imageUrl) ? (
                                    <>
                                        <div className="w-24 sm:w-32 h-full">
                                            <img src={imageUrl} alt="" className="h-full w-full object-cover" />  
                                        </div>  
                                    </>
                                    ) : (
                                    <>
                                        <div className="w-1/4 h-full flex justify-center bg-gray-100 border-r border-gray-400">
                                            <img src='/twitter-no-image.svg' alt="" className="w-1/3 h-1/3 m-auto object-cover" />    
                                        </div>
                                    </>
                                    )
                                }
                            

                            <div className="flex flex-col flex-auto w-2/3 md:w-3/4 pl-3 text-left content-center justify-center">
                                <div>
                                    <p className="text-gray-500 text-xs">{meta.url_host}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm sm:text-base text-ellipsis break-normal truncate">{title}</p>
                                </div>
                                <div>

                                    {
                                        (description) ? (
                                        <>
                                            <p className="text-gray-500 text-sm sm:text-base" id="twitter-desc">{description}</p>
                                        </>
                                        ) : (
                                        <>
                                        </>)
                                    }
                
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                    ) 
                    : (
                    <>
                    { meta.twitter_card == 'summary_large_image' && imageUrl ? (
                    <div className="text-center my-8 px-2 flex justify-center">
                        {/* w-full sm:w-4/5 md:w-2/5 */}
                        <div className="w-full sm:w-9/12 md:w-1/2 lg:w-2/5 mx-2 border flex flex-col rounded-md overflow-hidden border-slate-300 dark:border-slate-700">
                            <div className="w-full h-64">
                                <img src={imageUrl} alt="" className="h-full w-full object-cover" />    
                            </div>

                            <div className="flex flex-col w-full pl-3 text-left content-center justify-center my-2">
                                <div>
                                    <p className="text-gray-500 text-sm">{meta.url_host}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-base text-ellipsis break-normal truncate">{title}</p>
                                </div>

                                {(description) ? (
                                <>
                                <div>
                                    <p className="text-gray-500 text-base" id="twitter-desc">{description}</p>
                                </div>
                                </>
                                ) : (
                                <></>)}
                                
                            </div>
            
                        </div>
                    </div>
            ) : (
            <>
            <p>No image URL Found. </p>
            </>) }
                    </>)
                }

                </>)
                 : 
                (<>
                No twitter:card provided
                </>)
            }
             </>) : 
            (<>No title found</>) }
            


        </>
    )
}