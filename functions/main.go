package functions

import (
	"fmt"
	"log"
	"net/http"
	"net/url"
	"encoding/json"
	"github.com/PuerkitoBio/goquery"

)
//import "gopkg.in/guregu/null.v4"


type MetaData struct {
	
Title *string `json:"title"`
UrlHost *string `json:"url_host"`
Status *int `json:"status"`
NumberOfTags *int `json:"no_of_tags"`
Description *string `json:"description"`
TwitterCard *string `json:"twitter_card"`
TwitterSite *string `json:"twitter_site"`
TwitterTitle *string `json:"twitter_title"`
TwitterDescription *string `json:"twitter_description"`
TwitterImage *string `json:"twitter_image"`
GraphTitle *string `json:"graph_title"`
GraphType *string `json:"graph_type"`
GraphUrl *string `json:"graph_url"`
GraphImage *string `json:"graph_image"`
GraphDescription *string `json:"graph_description"`

}

var title *string
var status *int
var url_host *string
var number_of_tags *int
var description *string
var twitter_card *string
var twitter_site *string
var twitter_title *string
var twitter_description *string
var twitter_image *string
var graph_title *string
var graph_type *string
var graph_url *string
var graph_image *string
var graph_description *string


func UrlParser(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query()
	urlString:= query.Get("url")

	if urlString == "" {
		fmt.Fprint(w, "No Paramter provided or is empty.")
		return
	}

	resp, err := http.Get(urlString)

	if err != nil {
		log.Fatal(err)
	}

	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		log.Fatalf("failed to fetch data: %d %s", resp.StatusCode, resp.Status)
	}

	doc, err := goquery.NewDocumentFromReader(resp.Body)

	if err != nil {
		log.Fatal(err)
	}
	
	res := doc.Find("meta").Length()

	if res == 0 {
		number_of_tags = nil
	} else {
		number_of_tags = &res
	}

	u, _ := url.Parse(urlString)
	url_host = &u.Host

	status = &resp.StatusCode

	doc.Find("meta").Each(func(i int, s *goquery.Selection) {
		//content, _ := s.Attr("content")

		if s.AttrOr("name", "") == "title" {

			res  := s.AttrOr("content", "")

			if len(res) > 0 {
				title = &res
			} else {
				title = nil
			}
		}

		if s.AttrOr("name", "") == "description" {
			
			res  := s.AttrOr("content", "")

			if len(res) > 0 {
				description = &res
			} else {
				description = nil
			}

		}

		if s.AttrOr("name", "") == "twitter:card" {
			
			res  := s.AttrOr("content", "")

			if len(res) > 0 {
				twitter_card = &res
			} else {
				twitter_card = nil
			}		}

		if s.AttrOr("name", "") == "twitter:site" {
			
			res  := s.AttrOr("content", "")

			if len(res) > 0 {
				twitter_site = &res
			} else {
				twitter_site = nil
			}		}

		if s.AttrOr("name", "") == "twitter:title" {
			
			res  := s.AttrOr("content", "")

			if len(res) > 0 {
				twitter_title = &res
			} else {
				twitter_title = nil
			}		}

		if s.AttrOr("name", "") == "twitter:description" {
			
			res  := s.AttrOr("content", "")

			if len(res) > 0 {
				twitter_description = &res
			} else {
				twitter_description = nil
			}		}

		if s.AttrOr("name", "") == "twitter:image" {
			
			res  := s.AttrOr("content", "")

			if len(res) > 0 {
				twitter_image = &res
			} else {
				twitter_image = nil
			}		}

		if s.AttrOr("property", "") == "og:title" {
			
			res  := s.AttrOr("content", "")

			if len(res) > 0 {
				graph_title = &res
			} else {
				graph_title = nil
			}		}

		if s.AttrOr("property", "") == "og:type" {
			
			res  := s.AttrOr("content", "")

			if len(res) > 0 {
				graph_type = &res
			} else {
				graph_type = nil
			}		}

		if s.AttrOr("property", "") == "og:url" {
			
			res  := s.AttrOr("content", "")

			if len(res) > 0 {
				graph_url = &res
			} else {
				graph_url = nil
			}		}

		if s.AttrOr("property", "") == "og:image" {
			
			res  := s.AttrOr("content", "")

			if len(res) > 0 {
				graph_image = &res
			} else {
				graph_image = nil
			}		}

		if s.AttrOr("property", "") == "og:description" {
			
			res  := s.AttrOr("content", "")

			if len(res) > 0 {
				graph_description = &res
			} else {
				graph_description = nil
			}		}

		//fmt.Printf("Post #: %s\n", description)
	})

	metaData := MetaData{
		Status: status,
		Title: title,
		UrlHost: url_host,
		NumberOfTags: number_of_tags,
		Description: description,
		TwitterCard: twitter_card,
		TwitterSite: twitter_site,
		TwitterTitle: twitter_title,
		TwitterDescription: twitter_description,
		TwitterImage: twitter_image,
		GraphTitle: graph_title,
		GraphType: graph_type,
		GraphUrl: graph_url,
		GraphImage: graph_image,
		GraphDescription: graph_description,

	}

	b, err := json.Marshal(metaData)
    if err != nil {
        fmt.Println(err)
        return
    }
	
	w.Header().Set("Content-Type", "application/json")

    fmt.Fprintf(w, string(b))

	//json.NewEncoder(w).Encode(b)

}