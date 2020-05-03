# News Agent App in Vue
## Description

This website was built in [Vue.js](https://vuejs.org/) which reads from the [github.com/javieraviles/covidAPI](https://github.com/javieraviles/covidAPI) open source API.

This site is using Vuex and Vue Router to handle state and routing.

The key features of the website is that users can view an overall view of Covid stats from all countries in the world and then view indivudual stats per country.

On load the website hits the GET ["https://coronavirus-19-api.herokuapp.com/countries"](https://coronavirus-19-api.herokuapp.com/countries ) endpoint which gets the latest countries stats on corona, and on selecting a country it hits the GET ["https://coronavirus-19-api.herokuapp.com/countries/{countryName} "](https://coronavirus-19-api.herokuapp.com/countries/{countryName} ) one to view all stats on an indivudual country.

Something I'm still working on is to get Google GEO Charts running to view all stats in an easy to understand manner.

The site is also a PWA so you can install this website as a dedicated app on your mobile device or browser. 

## Installation

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve

Output:
 DONE  Compiled successfully in 3706ms                                                                                                                                                        15:12:47

  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.0.119:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

### Compiles and minifies for production
```
npm run build
```

### Lint's and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Build/Devops 
This project has been connected to [Cloud Build](https://cloud.google.com/cloud-build) which has a deployment trigger connected to the master branch on the repository, once this trigger has been hit it will deploy the project to a [App engine](https://cloud.google.com/appengine) instance.

## Known Issues

* I have too many ideas and too little time to get it all done :D :'<

## Improvements
* Implement the Google Geo charts page (WIP)
* Improve the UI/UX.

## Author
Built By me [Michael Botes](https://mbotes.github.io/) and you can find my github over [here](https://github.com/Mbotes)