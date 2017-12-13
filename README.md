# Typescript + React + Express + Parcel + Prettier = ❤️

This repository has basic settings for buildling a full stack TypeScript system.

## Libraries

* React, ReactDOM 16.2.0
* TypeScript 2.6.2
* Prettier
* Parcel bundler

## Set up the project

```
git clone git@github.com:dragosbulugean/resolution.git
cd resolution
npm install
```

## Start development

    npm run start

The application is running at `localhost:1234` in the browser.

## Build the application for production

    npm run build

Outputs to `/dist`. You can change the destination by modifying the npm run build script like below.

```
// package.json
// ...
"scripts": {
  // ...
  "build": "parcel build ./src/index.html -d OUTPUT_DIR --public-url '/'"
}
// ...
```
