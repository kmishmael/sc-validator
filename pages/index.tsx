import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function Page() {

    const { asPath } = useRouter();

    return (
        <>
        <NextSeo 
        title="Social Card Validator and Preview"
        description="Preview how your content will look when shared on social media platforms and validate any issues with your meta tags."
        canonical={`https://socialvalidator.com${asPath}`}
        openGraph={{
          url: `https://socialvalidator.com${asPath}`,
          title: 'Social Card Validator and Preview',
          description: 'Preview how your content will look when shared on social media platforms and validate any issues with your meta tags.',
          images: [
            {
              url: 'https://socialvalidator.com/sc-validator-thumbnail.png',
              width: 600,
              height: 337.5,
              alt: 'Social Validator Thumbnail',
              type: 'image/jpeg',
            },
          ],
        //  siteName: 'SiteName',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        />

        <div className="flex flex-row justify-center text-center mt-24 mx-2 py-4">
        <p className="text-5xl md:text-8xl py-4 font-bold"><span className="text-light-social">Cross Platform Link Sharing Card</span> <span className="text-deep-purple">Validator</span></p>
        </div>
        <div className="mx-2 flex justify-center text-center mt-16 gap-8">
            <Link href={'/twitter-validator'} >
            <button className="px-4 group border border-slate-200 text-deep-purple hover:bg-purple-200 py-2 text-center relative transition-all duration-300 ease-in rounded-lg"><span className='mr-3'> Twitter Validator</span></button>
            </Link>
           
            <Link href={''}>
            <button className="bg-transparent border border-slate-100 text-deep-purple hover:bg-purple-200 py-2 px-6 rounded-lg">Share on Twitter</button>
            </Link>

        </div>
        </>
    )
}