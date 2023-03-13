// node --experimental-network-imports index.mjs
import CurrencyManager from "https://cdn.jsdelivr.net/gh/ErickWendel/lives-aquecimento03-javascript-expert@main/01-esmodules/esmodule/shared/currencyManager.mjs"
// import CurrencyManager from "../shared/currencyManager.mjs"

async function updateOutput(value) {
    console.log(value)
}

const inputMonitor = (value) => updateOutput(CurrencyManager.format(value))

const input = process.openStdin()
console.log('typing...')
input.addListener("data", inputMonitor)