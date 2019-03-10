# Quasar App


```bash
mkvirtualenv test_jest
pip install nodeenv
nodeenv -p
npm i -g npm
npm install -g @quasar/cli

quasar create test_jest -b dev

? Project name (internal usage for dev) test_jest
? Project product name (official name) Quasar App
? Project description A Quasar Framework app
? Author Peter Lucia <peter@robopeter.com>
? Check the features needed for your project: ESLint, Vuex
? Pick an ESLint preset Standard
? Cordova id (disregard if not building mobile apps) org.cordova.quasar.app
? Should we run `npm install` for you after the project has been created? (recommended) NPM
Quasar CLI · Generated "jest_test".


cd jest_test

quasar ext add @quasar/testing

? Jest
? Please choose how to install required babel rules: Overwrite babel.config.js and use additional .babelrc
? Jest Unit testing will now be installed. Please choose additional options: SFC webpack <test> loader, extra "scripts" in your package.json

```
