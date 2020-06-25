# Squad Searcher
Web app to searching wot player for playing together in real time.

### Before Development
Before starting development need install all dependencies, run command below
```
npm install
```

### Development
We have separate client and server side.

#### Client
For running client side, run command below
```
npm run serve
```
By default client will be serve on http://localhost:8080
#### Server
For running server, run command below
```
npm run server:dev
```
By default server will be serve on http://localhost:3000
### Building Client for Production
```
npm run build
```

### Deploying project to Heroku
On Heroku platform setuped CI, for deploying whole project to heroku, just commit your changes and push it to master branch in remote GitHub repository.

Be **carefull**, you must check your code before deploying.

### Other commands
#### Run your tests
```
npm run test
```
#### Lints and fixes files
```
npm run lint
```
#### Run your end-to-end tests
```
npm run test:e2e
```
#### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
