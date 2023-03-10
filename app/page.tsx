import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { UrlBox } from '@sc-validator/components/urlBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main>
      {/*style={{backgroundColor: '#0277bd'}}*/}
      <div className='h-screen-1/2 bg-gray-200 h-92 text-center flex flex-col justify-center py-6'>
        <div className='py-9'>
          <p className='font-bold text-4xl'>Simple Social Card Validator</p>
        </div>
        <div className='pb-12 pt-6 w-full text-center'>
          <p className='w-2/3 mx-auto text-xl text-gray-600'>Sc card validator is a social media url share validator. Have a glance at how your links will look 
            like when shared on social media, with support for multiple platforms
          </p>
        </div>
      </div>
      <UrlBox />
    </main>
    </>
  )
}
