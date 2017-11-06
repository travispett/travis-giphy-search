# giphy-search

A simple Giphy search app.

## Dependencies

- Node.js (built and tested with 8.9.0, requires async/await support which is >7.6.0)

## Build Setup

``` bash
# install dependencies
yarn install

# Two tab operation (sorry, simplifying this takes forever) for development:
# Tab one for the front end:
yarn run dev
# Tab two for the API (ideally nodemon would handle file watching and reloading but not set up yet):
node app.js

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run e2e tests
yarn run e2e

# run all tests
yarn test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## How

Initially scaffolded with the [vue-cli webpack template](https://github.com/vuejs-templates/webpack).
This creates a Vue app with some somewhat reasonable defaults. Nothing in `build/` was changed and very little in `config/` was changed.
Some small things were added:
- [vue-material](http://vuematerial.io/) for styling and layout.
- [axios](https://github.com/axios/axios) for communicating with the server. Ultimately there are better ways to set up these services, I'll touch on this in the "Reviewing the app" section below though.

The Express app was written from scratch and is fairly simple. Here are some things it does:
- Loads environment variables from a `.env` file. There is an example at `.env.example`.
- Serves static files from `dist/`. When you run `yarn run build` the Vue app is minified and bundled into `dist/` and this serves it in production.
- Mounts the API under `/api`

## Why

Ultimately this does not _need_ the Express server in its current state, the Vue app could just make the API calls, but then I'd have to deal with obfuscating API keys.
But assuming I am building this based on someone else's requirements, the next assumed requirements will probably be auth, saved searches, favorites, sharing, etc.
Those will all require some kind of database interaction, so might as well start with a server.

## Reviewing the app

#### Server (root `app.js` and `app/` directory)

- `app.js` is the Express app base.
- `app/controllers/GifsController.js` holds the `index` route at `/api/gifs`.
- `app/services/GifService.js` is a small service for interacting with the Giphy API. Only search is implemented.

#### Vue app (`src/` directory)

- `main.js` is general Vue setup with vue-material.
- `App.vue` generally there wouldn't be app components in here but I elected not to go with vue-router since this literally is a single page app.
- `SearchForm.vue` the emitting of events after the API request isn't ideal, but at least it is child-to-parent instead of parent-to-child. Here is how this usually would work with Vuex:
  - The search button click would dispatch an action which would kick off the API request, the result would then set the state which the GifContainer component already knows how to handle.

## Next steps

Given more time and to make this more production-ready and usable I would:

- Maybe cache responses from the Giphy API for a short time with something like Redis.
- Implement a controller autoloading to create routes for any controllers in the `app/controllers/` directory.
  - Write some specs for this since any magic loading is usually pretty hard to read and comprehend.
- Use something like [nock](https://github.com/node-nock/nock) for replaying HTTP requests to GIPHY's API for easier testing.
- Clean up separation of server and frontend and ultimately make running them together in development easier.
