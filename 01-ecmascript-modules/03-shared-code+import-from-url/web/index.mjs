// https://www.jsdelivr.com/github
// import CurrencyManager from "../shared/currencyManager.mjs"
import CurrencyManager from "https://cdn.jsdelivr.net/gh/ErickWendel/lives-aquecimento03-javascript-expert@main/01-esmodules/esmodule/shared/currencyManager.mjs"

function updateOutput(value) {
    const output = document.getElementById("output")
    output.innerText = value
}

window.inputMonitor = (value) => updateOutput(CurrencyManager.format(value))