
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


        </>
    )
}