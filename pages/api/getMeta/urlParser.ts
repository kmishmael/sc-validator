import { isValidUrl } from "@sc-validator/lib/urlParser";

export default async (req: any, res: any) => {
    try {
    
    const { url } = req.query

    
    if(isValidUrl(url)){


        let doc = await (await fetch(`https://us-central1-scvalidator.cloudfunctions.net/urlParser?url=${url}`)).json();

        res.json(doc)
    } 
   }
   
   catch(e) {
        throw new Error(e as string).message
    }
}