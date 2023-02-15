package main
 import (
	"fmt"
	"io/ioutil"
	"net/http"
	
 )

 func main() {
	url := "https://siliconvoyage.com/blog/a-complete-guide-to-intel-processors-naming-conventions";

	fmt.Printf("HTML code of %s ...\n", url);

	resp, err := http.Get(url)
	// handle error if there is one
	if err != nil {
		panic(err)
	}
	// do this now so it wont be forgotten
	defer resp.Body.Close()
	
	// reads html as a slice of bytes
	html, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}
	//show the HTML code as a string %s
	
	fmt.Printf("%s\n", html)

 }