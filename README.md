This is Social Card Validator. A tool, debugger and validator for your social content shared on social media platforms like [Twitter](https://twitter.com/). A few weeks ago, I logged into [Twitter Card Validator](https://cards-dev.twitter.com/validator) to find that it was no longer functional. It has been moved to Tweet composer in the main Twitter application, which behaves weirdly and now I need a Twitter account to use it. Sometimes, it requires you make an actual tweet to parse the metadata from the links to a Twitter card. Apparently, it was part of the microservices that were costing Twitter millions to continue running, and had to be shut down, thats what the new Owner of Twitter said (tweeted). However, efforts were made to stick to Documentation provided by these platforms along with some simulated tests.
So I thought to myself that it was not a big deal if I spent atleast three days of my short vacation time to make an alternative, which I am confortable with. 
Oh the domain is [socialvalidator](https://socialvalidator.com/) because it was short and available at the time. 

> Please Note that this project is still in Beta, it may contain bugs, weird edge cases, and isolated issues. If you encounter a bug you can file an issue or better, submit a pull request.

## Project Overview
This project was created using [NextJs](https://nextjs.org/), a [ReactJs](https://reactjs.org/) using [Typescript](https://www.typescriptlang.org/). Though NextJs 13 is used, note than the new AppDir feature was no used, it was still very unstable and so far, there was no way to handle API routes in the new format (It was announced a few days ago as the time of writing, but still it is not stable, and the NextJs team is still seeking input from the community on the matter). 

Tailwind CSS was used for styling. 

For server code, it runs a Python function running on Google Cloud functions (1st Gen). Efforts are to be made to migrate the code to Golang and to use 2nd Gen Cloud functions, which are more of like [Cloud Run](https://cloud.google.com/run).  

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For server code (function), Look here with how to run Google Cloud functions locally(Python specific) using [Flask](https://codelabs.developers.google.com/codelabs/cloud-functions-python-http#6).

## Support
Currently, there is support only for Twitter 
The card supported for Twitter are:
- `summary`
- `summary_large_image`

## Roadmap
With the time a get to continue with this little project:
- Migration to Go for server code
- Support for `app` and `player` Twitter cards.
- Support for Open Graph specific platforms i.e Facebook and LinkedIn
- Write Documentation on how social content preview work and how they should be implemented.