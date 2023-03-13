import config from './config.json' assert { type: "json"}
import Service from './service.js'

const service = new Service({
  url: config.url
})

const chars = await service.getCharacters({ skip: 0, limit: 5 })
const boldIfSmith = (name) => /smith/i.test(name) ? `<strong>${name}</strong>` : name
const htmlEl = chars
  .map(item => `<li><img width=50px src="${item.image}"/> ${boldIfSmith(item.name)}</li>`)
  .join("<br>")

const output = document.querySelector('#output')
output.innerHTML = htmlEl