# better-future-app

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```



For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Issues

1. You cannot target static webstite with spa. Use universal instead (https://github.com/nuxt/nuxt.js/issues/7886)

# Dependencies

1. npm install locomotive-scroll --save
2. npm install swiper vue-awesome-swiper --save

# Deployment to Firebase (https://www.axfon.com/how-to-deploy-nuxt-js-in-firebase-hosting-with-firestore-realtime-database/)
1. npm install -g firebase-tools
2. cd better-future-app
3. npm run generate
4. firebase login
5. firebase init
6. firebase deploy

Project Console: https://console.firebase.google.com/project/better-future-app/overview
Hosting URL: https://better-future-app.web.app 

