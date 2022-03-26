# vue-reactive-data

This is built with Vue 2 using [Vite](https://vitejs.dev/).

Resources
- https://v2.vuejs.org/v2/guide/reactivity.html
- https://michaelnthiessen.com/how-to-watch-nested-data-vue/

## Setup

```bash

# install
`yarn install`

# run the dev server
`yarn dev`

# build for production
`yarn build`

```

## Deploy

Using [netlify](https://netlify.app/) for deployment

```bash
# setup netlify project and follow the steps
`netlify init`

# deploy to production
`netlify deploy --prod`

```

## Node version

You may notice issues when using an M1 Mac so be sure to set the specific node version.

Set your node version using nvm with the `.nvmrc` file.

If you don't have node version manager then [download nvm](https://github.com/nvm-sh/nvm)

```
# use node version with nvm
nvm use
```