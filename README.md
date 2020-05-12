# Tutorial run di laptop

1. git clone github
    ```shell
   git clone https://github.com/mrifqip29/gatsby-blog.git
   ```
   
2. checkout branch (branch scb-web)
```shell
git checkout scb-web
```

3. bikin file .env biar bisa login ke contentful
bikin file ".env" di dalem folder gatsby. create new file-> .env
isi file .env dengan ini, lalu save
```shell
GATSBY_GRAPHQL_IDE=playground
CONTENTFUL_SPACE_ID=n2o2oyh78lcv
CONTENTFUL_ACCESS_TOKEN=yNw9k6la9B3Q06h04menoajN6zNllx-ifEK1E8Ia5GU
```

hubungin spaceid dan accessToken di gatsby-config.js -> plugins-> gatsby-source-contentful

isi spaceId dan accessToken sampe kaya gini isinya
```shell
 resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
```

4. install dependencies yang diperlukan
```shell
npm install
```


5. jalankan
```shell
npm run develop
```
