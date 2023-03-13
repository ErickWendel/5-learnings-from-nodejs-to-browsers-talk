import config from './config.json' assert { type: "json"}
import Service from './service.js'
import View from './view.js'

import Controller from "./controller.js"

await Controller.initialize({
  service: new Service({
    url: config.url
  }),
  view: new View()
})