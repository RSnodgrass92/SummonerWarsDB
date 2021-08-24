import factionBreakers from "./breakersInfo"

const factionsArr=[factionBreakers]

factionsArr.sort((a,b)=>a.name>b.name ? 1: -1)

export {factionsArr}