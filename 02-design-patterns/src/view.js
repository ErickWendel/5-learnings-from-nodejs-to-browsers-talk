export default class View {
  updateTable(items) {
    const output = document.querySelector('#output')
    output.innerHTML = this.formatItems(items)
  }

  formatItems(items) {
    const toBold = ({
      name,
      isBold
    }) => isBold ? `<strong>${name}</strong>` : name

    return items
      .map(item => `<li><img width=50px src="${item.image}"/> ${toBold(item)}</li>`)
      .join("<br>")
  }
}