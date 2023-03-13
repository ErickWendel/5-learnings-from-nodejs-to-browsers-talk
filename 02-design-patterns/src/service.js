export default class Service {
  constructor({ url }) {
    this.url = url
  }
  async getCharacters({ skip, limit }) {
    const data = (await (await fetch(this.url)).json()).results
    return data.slice(skip, limit)
  }
}