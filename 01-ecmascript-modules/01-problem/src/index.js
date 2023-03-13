// explicitamente esperar pela página carregar
window.onload = async () => {
  const config = await (await fetch("/src/config.json")).json()
  // não dá para saber de onde veio
  const service = new window.Service({
    url: config.url
  })
  
  const chars = await service.getCharacters({ skip: 0, limit: 5 })
  const boldIfSmith = (name) => /smith/i.test(name) ? `<strong>${name}</strong>` : name
  const htmlEl = chars
  .map(item => `<li><img width=50px src="${item.image}"/> ${boldIfSmith(item.name)}</li>`)
  .join("<br>")
  
  const output = document.querySelector('#output')
  output.innerHTML = htmlEl
}