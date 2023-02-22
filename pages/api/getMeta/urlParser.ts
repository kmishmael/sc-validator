import { isValidUrl } from "@sc-validator/lib/urlParser";

export default async (req: any, res: any) => {
    try {
    
    const { url } = req.query

    
    if(isValidUrl(url)){


        let data = await (await fetch(`https://us-central1-scvalidator.cloudfunctions.net/UrlParser?url=${url}`)).json();
        
        res.json(data)
    } 
   }
   
   catch(e) {
        throw new Error(e as string).message
    }
}