
type Props = {
    logs: log[];
}

type log = {
    isError: boolean;
    logText: string;
  }

  
export function Logs({logs}: Props){
    return (
        <>
        
        <div className="w-full sm:w-9/12 md:w-1/2 lg:w-2/5 mx-2 mt-6 py-4 px-4  border border-slate-300 dark:border-slate-700 rounded-md">
            <p className="text-gray-500 font-medium my-2 underline">LOGS</p>
            {logs.map((c, index) => (
            <div key={index} className={`flex flex-row px-2 gap-2 ${(c.isError) ? `text-red-600` : `text-green-600`} h-8 items-center my-1`}>
                <i className={`${(c.isError) ? `ri-close-circle-line` : `ri-checkbox-circle-line`} text-lg`}></i>
                <p className="text-base">{c.logText}</p>
            </div>
            ))}

        </div>

{/*
        <div className="w-full sm:w-1/3 mx-auto py-4 px-4  border rounded-sm">
            <p className="text-gray-500 font-medium my-2 underline">LOGS</p>

            {logger.isURL ? (
            <>

            {isURL ? (
            <>
            <div className="flex flex-row px-2 gap-2  text-green-600 h-8 items-center my-1">
                <i className="ri-checkbox-circle-line text-lg"></i>
                <p className="text-base">URL verified</p>
            </div>
            </>) : 
            (<>
            <div className="flex flex-row px-2 gap-2  text-red-600 h-8 items-center my-1">
                <i className="ri-close-circle-line text-lg"></i>
                <p className="text-base">URL is Invalid</p>
            </div>
            </>)}

            </>
            ) : (
            <>
            <div className="animate-pulse flex flex-row px-2 gap-2  text-red-600 bg-gray-300 rounded-md h-8 my-1">
                
                </div>
            </>
            )}
            
            {logger.isAccessible ? (
            <>

            {isAccess ? (
            <>
            <div className="flex flex-row px-2 gap-2 text-green-600 h-8 items-center my-1">
                <i className="ri-checkbox-circle-line text-lg"></i>
                <p className="text-base">Page Fetched successfully</p>
            </div>
            </>) : 
            (<>
            <div className="flex flex-row px-2 gap-2 text-red-600 h-8 items-center my-1">
                <i className="ri-close-circle-line text-lg"></i>
                <p className="text-base">{`Page Fetch unsuccessful (Code ${status})`}</p>
            </div>
            </>)}

            </>
            ) : (<>
            <div className="animate-pulse flex flex-row px-2 gap-2  text-red-600 bg-gray-300 rounded-md h-8 my-1">
                
            </div>
            </>)}
            
            {logger.isTags ? (
            <>

            {isTags ? (
            <>
            <div className="flex flex-row px-2 gap-2 text-green-600 h-8 items-center my-1">
                <i className="ri-checkbox-circle-line text-lg"></i>
                <p className="text-base">{`${(tagsNumber) ? (tagsNumber) : 0}  metatags were found`}</p>
            </div>
            </>) : 
            (<>
            <div className="flex flex-row px-2 gap-2 text-red-600 h-8 items-center my-1">
                <i className="ri-close-circle-line text-lg"></i>
                <p className="text-base">No metatags found</p>
            </div>
            </>)}

            </>
            ) : (
            <>
            <div className="animate-pulse flex flex-row px-2 gap-2  text-red-600 bg-gray-300 rounded-md h-8 my-1">
                
            </div>
            </>)}
                        
            {logger.isTwitter ? (
            <>

            {isTwitter ? (
            <>
            <div className="flex flex-row px-2 gap-2 text-green-600 h-8 items-center my-1">
                <i className="ri-checkbox-circle-line text-lg"></i>
                <p className="text-base">{`twitter:card = ${card} tag found`}</p>
            </div>
            </>) : 
            (<>
            <div className="flex flex-row px-2 gap-2 text-red-600 h-8 items-center my-1">
                <i className="ri-close-circle-line text-lg"></i>
                <p className="text-base">twitter:card tag not found or is invalid</p>
            </div>
            </>)}

            </>
            ) : (
            <>
            <div className="animate-pulse flex flex-row px-2 gap-2  text-red-600 bg-gray-300 rounded-md h-8 my-1">
                </div>
            </>)}
            
        </div>

        */}
        </>
    )
}