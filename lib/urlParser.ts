export const isValidUrl = (urlString: string) => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
return !!urlPattern.test(urlString);
}

async function fetchHtml(url: string): Promise<Document>{
    console.log('url', url)
    const html = await( await fetch(url, {mode: 'no-cors'})).text();
    console.log(html)
    return new DOMParser().parseFromString(html, 'text/html');
}

async function getMetaTags(document: Document){
    
    const data = {
        'title': document.querySelector("[name=title][content]")?.getAttribute('content'),
        'description': document.querySelector("[name=description][content]")?.getAttribute('content'),
        'twitter_card': document.querySelector('[name="twitter:card"][content]')?.getAttribute('content'),
        'twitter_site': document.querySelector('[name="twitter:site"][content]')?.getAttribute('content'),
        'twitter_title': document.querySelector('[name="twitter:title"][content]')?.getAttribute('content'),
        'twitter_description': document.querySelector('[name="twitter:description"][content]')?.getAttribute('content'),
        'twitter_image': document.querySelector('[name="twitter:image"][content]')?.getAttribute('content'),
        'graph_title': document.querySelector("[property~=title][content]")?.getAttribute('content'),   
        'graph_type': document.querySelector("[property~=type][content]")?.getAttribute('content'),   
        'graph_url': document.querySelector("[property~=url][content]")?.getAttribute('content'),   
        'graph_image': document.querySelector("[property~=image][content]")?.getAttribute('content'),   
        'graph_description': document.querySelector("[property~=description][content]")?.getAttribute('content'),   

    }

    return data;
}

export async function urlParser(url: string){
    if(isValidUrl(url)){
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set('Content-Type', 'application/json');
        requestHeaders.set('Authorization', `bearer ${process.env?.BEARER_TOKEN}`);

        let doc = await (await fetch(url, {
            method: 'GET',
            headers: requestHeaders,
        })).json();

        console.log(doc)
        /*
        let doc: Document = await fetchHtml(url);
        console.log(doc);
        let tagsDic = await getMetaTags(doc);
        alert(JSON.stringify(tagsDic));
        */
    } else {
        alert('Invalid URL.')
    }
}