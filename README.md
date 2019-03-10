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


# Run tests with:
quasar run @quasar/testing test -- --unit=jest --dev=pwa




 app:extension Running "@quasar/testing" Quasar App Extension... +0ms
app:run Running "@quasar/testing" > "test" command +18ms
Dev mode.......... spa
Pkg quasar........ v1.0.0-beta.9
Pkg @quasar/app... v1.0.0-beta.10
Debugging......... enabled
app:extension Running "@quasar/testing-unit-jest" Quasar App Extension... +0ms
app:extension Running "@quasar/testing" Quasar App Extension... +20ms
app:quasar-conf Reading quasar.conf.js +9ms
app:dev Checking listening address availability (0.0.0.0:8080)... +4ms
app:webpack Extension(@quasar/testing-unit-jest): Chaining SPA Webpack config +1s
app:webpack Extending SPA Webpack config +22ms
app:generator Generating Webpack entry point +39ms
app:dev-server Booting up... +13ms
app:progress Compiling SPA... +298ms
app:progress Compiled SPA in ~20s +20s
DONE
Compiled successfully in 20168ms3:46:57 PM
N
App dir........... /mnt/c/Users/Peter/Documents/ss/test_jest
App URL........... http://localhost:8080/
Dev mode.......... spa
Pkg quasar........ v1.0.0-beta.9
Pkg @quasar/app... v1.0.0-beta.10
RUN:
Running unit tests with jest
$ jest
PASS
test/jest/__tests__/App.spec.js (6.61s)
Mount Quasar
✓ passes the sanity check and creates a wrapper (16ms)
✓ has a created hook (1ms)
✓ accesses the shallowMount (7ms)
✓ sets the correct default data (2ms)
✓ correctly updates data when button is pressed (15ms)
FAIL
test/jest/__tests__/Getters.spec.js
● Test suite failed to run
TypeError: _quasar.LocalStorage.has is not a function
----------------------|----------|----------|----------|----------|-------------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------|----------|----------|----------|----------|-------------------|
All files             |        0 |        0 |        0 |        0 |                   |
 components           |        0 |      100 |        0 |        0 |                   |
  myvalwidget.vue     |        0 |      100 |        0 |        0 |          10,15,23 |
 layouts              |        0 |      100 |        0 |        0 |                   |
  MyLayout.vue        |        0 |      100 |        0 |        0 |             85,90 |
 pages                |        0 |      100 |      100 |        0 |                   |
  Index.vue           |        0 |      100 |      100 |        0 |                13 |
 router               |        0 |        0 |        0 |        0 |                   |
  index.js            |        0 |      100 |        0 |        0 |        6,14,15,25 |
  routes.js           |        0 |        0 |        0 |        0 |    2,5,7,13,14,16 |
 store                |        0 |      100 |        0 |        0 |                   |
  index.js            |        0 |      100 |        0 |        0 |           6,14,20 |
 store/module-example |        0 |        0 |        0 |        0 |                   |
  actions.js          |        0 |      100 |        0 |        0 |                 2 |
  getters.js          |        0 |      100 |        0 |        0 |                 2 |
  index.js            |        0 |        0 |        0 |        0 |                   |
  mutations.js        |        0 |      100 |        0 |        0 |               4,5 |
  state.js            |        0 |        0 |        0 |        0 |                   |
----------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 failed, 1 passed, 2 total
Tests:     5 passed, 5 total
Snapshots: 0 total
Time:      20.299s
Ran all test suites.
FAILED TESTS: Tests with jest did not pass.
```
