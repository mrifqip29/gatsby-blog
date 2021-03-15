# Steps
1. Git clone github
```shell
git clone https://github.com/mrifqip29/gatsby-blog.git
```
   
2. Checkout branch (branch scb-web)
```shell
git checkout scb-web
```

3. Buat file ".env.development" di dalem folder gatsby. Kemudian hubungkan spaceid dan accessToken di gatsby-config.js -> plugins-> gatsby-source-contentful seperti ini:
```shell
 resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
```

4. Install dependencies yang diperlukan
```shell
npm install
```


5. Jalankan
```shell
npm run develop
```
