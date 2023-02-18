from urllib.parse import urlparse
import requests
from bs4 import BeautifulSoup
import json

def urlParser(request):

    print(request)
    
    request_args = request.args

    print(request.args)

    if request_args and "url" in request_args:
        url = request_args["url"]
    else:
        return 'No paramater passed.'
    
    url_host = urlparse(url).netloc
    
    html = requests.get(url)
    
    if (html.status_code != 200):
            return json.dumps({
            'status': html.status_code,
            'url': url,
            'url_host': url_host,
            }), 400, {'Content-Type': 'application/json'}
    
    soup = BeautifulSoup(html.content, 'html.parser')

    number_of_tags = len(soup.findAll('meta'))

    title = soup.find("meta", {"name": "title"})
    title = title["content"] if title else None

    description = soup.find("meta", {"name": "description"})
    description = description["content"] if description else None

    twitter_card = soup.find("meta", {"name": "twitter:card"})
    twitter_card = twitter_card["content"] if twitter_card else None

    twitter_site = soup.find("meta", {"name": "twitter:site"})
    twitter_site = twitter_site["content"] if twitter_site else None

    twitter_title = soup.find("meta", {"name": "twitter:title"})
    twitter_title = twitter_title["content"] if twitter_title else None

    twitter_description = soup.find("meta", {"name": "twitter:description"})
    twitter_description = twitter_description["content"] if twitter_description else None

    twitter_image = soup.find("meta", {"name": "twitter:image"})
    twitter_image = twitter_image["content"] if twitter_image else None

    graph_title = soup.find("meta", {"property": "og:title"})
    graph_title = graph_title["content"] if graph_title else None

    graph_type = soup.find("meta", {"property": "og:type"})
    graph_type = graph_type["content"] if graph_type else None

    graph_url = soup.find("meta", {"property": "og:url"})
    graph_url = graph_url["content"] if graph_url else None

    graph_image = soup.find("meta", {"property": "og:image"})
    graph_image = graph_image["content"] if graph_image else None

    graph_description = soup.find("meta", {"property": "og:description"})
    graph_description = graph_description["content"] if graph_description else None

    data = {
        'status': html.status_code,
        'no_of_tags': number_of_tags,
        'url': url,
        'url_host': url_host,
        'title':  title,
        'description': description,
        'twitter_card': twitter_card,
        'twitter_site': twitter_site,
        'twitter_title': twitter_title,
        'twitter_description': twitter_description,
        'twitter_image': twitter_image,
        'graph_title': graph_title,  
        'graph_type': graph_type,
        'graph_url': graph_url,  
        'graph_image': graph_image,   
        'graph_description': graph_description,   
    }

    return json.dumps(data), 200, {'Content-Type': 'application/json'}
