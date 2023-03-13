
export default class Controller {
  constructor({ service, view}) {
    this.service =  service
    this.view = view
  }
  static async initialize(deps) {
    const controller = new Controller(deps)
    await controller.init()
  }

  async init() {
    const chars = await this.service.getCharacters({ skip: 0, limit: 5 })
    const data = this.prepareItems(chars)
    this.view.updateTable(data)
  }

  prepareItems(chars) {
    return chars.map(({name, image}) => {
      return {
        isBold: /smith/i.test(name),
        name,
        image,
      }
    })
  }
}