import Link from 'next/link'

export function Footer(){
    return (
        <>
        <footer className="border-t border-slate-300 dark:border-slate-700 w-full mt-auto py-4">
            <div className="links">
                <ul className="flex justify-center gap-12">
                    <li>
                        <Link href="/" className="relative">Twitter <span className="absolute left-full bottom-1/2 font-medium text-xs text-blue-700">BETA</span></Link>
                    </li>
                    <li>
                        <a href="" className="relative">Facebook <span className="absolute left-full bottom-1/2 font-medium text-xs text-blue-700">ALPHA</span></a>
                        
                    </li>
                    <li>
                        <a href="" className="relative">LinkedIn <span className="absolute left-full bottom-1/2 text-xs font-medium text-blue-700">ALPHA</span></a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWW2TPrf6RzfupWkd6xVSsCyHerEOenOTHVYayrxkySl0LNQ/viewform?usp=sf_link">FeedbackHub</a></li>
                </ul>
            </div>
            <div className="flex justify-center gap-2 mt-2">
                <p>Social Card Validator</p>
                <p>&copy; 2023 All rights reserved</p>
            </div>
        </footer>
        </>
    )
}