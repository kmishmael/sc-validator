import Image from 'next/image'
import { Inter } from '@next/font/google'
import { UrlBox } from '@sc-validator/components/urlBox'
import { useState } from 'react'
import { logChecker, metaData } from '@sc-validator/types'
import { TwitterCard } from '@sc-validator/components/twitter'
import { Logs } from '@sc-validator/components/log'
import { isValidUrl } from '@sc-validator/lib/urlParser'
import { useRouter } from 'next/router'

type log = {
  isError: boolean;
  logText: string;
}

const TWITTER_CARDS = ["summary", "summary_large_image", "app", "player"]

const inter = Inter({ subsets: ['latin'] })

const initialLogState: logChecker = {
  isURL: false,
  isAccessible: false,
  isTags: false,
  isTwitter: false,
  isCardGenerated: false
}

export default function Home() {

  const [meta, setMeta] = useState<metaData>();
  const [isValid, setIsValid] = useState<boolean>();
  const [isAccess, setIsAccess] = useState<boolean>();
  const [tagsFound, setTagsFound] = useState<boolean>();
  const [isTwitter, setIsTwitter] = useState<boolean>();
  const [isCardDataReady, setIsCardDataReady] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);
  const { push } = useRouter()

  const scrollToCard = () => {
    push("#card")
  }
  
  const [logs, setLogs] = useState<log[]>([]);

  const [logger, setLogger] = useState<logChecker>(initialLogState);

  async function handleLogger(e: any, query: string, callback: any){
    // Reset the current state
    setLogs([])
    setIsCardDataReady(false);
    setLoading(true)
    // callback to initialize the new state
    await callback(query);
  }

 
  async function handleMeta(query: string){
    console.log(query)
    if (isValidUrl(query)){

      setLogs(prev => {
        prev.push({isError: false, logText: 'URL verified'})
        return prev
      })

      let res = await (await fetch(`/api/getMeta/urlParser?url=${query}`)).json();

      console.log(res);
      setMeta(res);

      if (res.status == 200){
        
        setLogs(prev => {
          prev.push({isError: false, logText: 'Page Fetched successfully'})
          return prev
        })
        /*
        setIsAccess(true)
        setTagsFound(true)
*/
        if(res.no_of_tags && res.no_of_tags != null){
          setLogs(prev => {
            prev.push({isError: false, logText: `${res.no_of_tags} metatags were found`})
            return prev
          })

          if(TWITTER_CARDS.includes(res.twitter_card as string)) {
            setLogs(prev => {
              prev.push({isError: false, logText: `twitter:card = ${res.twitter_card} tag found`})
              return prev
            })
            setIsCardDataReady(true)
            setLogs(prev => {
              prev.push({isError: false, logText: `Card being generated...`})
              return prev
            })
          } else {
            setLogs(prev => {
              prev.push({isError: true, logText: `twitter:card tag not found or is invalid`})
              return prev
            })
          }
        } else {
          setLogs(prev => {
            prev.push({isError: true, logText: 'No metatags found.'})
            return prev
          })
        }

      } else {

        setLogs(prev => {
          prev.push({isError: true, logText: `Page Fetch unsuccessful (Code ${res.status})`})
          return prev
        })

      }
 
    } else {

      setLogs(prev => {
        prev.push({isError: true, logText: 'URL is Invalid'})
        return prev
      })

    }

    setLoading(false)
    //window.scrollTo(0, 600)
    scrollToCard();

  }

  return (
    <>
    <main>
      {/*style={{backgroundColor: '#0277bd'}}*/}
      <div className='h-screen-1/2 h-92 text-center flex flex-col justify-center py-6'>
        <div className='py-9'>
          <p className='font-bold text-6xl'><span style={{color: '#00ACEE'}}>Twitter </span><span style={{color: '#33BBFF'}}>Social Card </span><span className="text-deep-purple">Validator</span></p>

        </div>
        <div className='pb-12 pt-6 w-full text-center'>
          <p className='w-2/3 mx-auto text-lg font-normal'>Have a <span className='texl-xl' style={{color: '#6666FF'}}>Preview </span>at how your links will look like when shared on <span className='text-xl' style={{color: '#00ACEE'}}>Twitter</span>
          </p>
        </div>
      </div>
      <UrlBox handleMeta={handleMeta} handleReset={handleLogger} isloading={loading} />
      <div className='my-10 flex justify-center'>
 
      <Logs logs={logs} isURL={isValid} isAccess={isAccess} isTags={tagsFound} isTwitter={isTwitter} status={meta?.status as unknown as string} card={meta?.twitter_card as unknown as string} tagsNumber={meta?.no_of_tags as unknown as number} logger={logger} />
      </div>

      {isCardDataReady ? (
      <>
      <div className='my-12' id='card'>
      
      <TwitterCard meta={meta as unknown as metaData}/>

      </div>
      </>
      ) : (<></>)}
        
    </main>
    </>
  )
}
