import breakers from "./breakersInfo"
import caveGoblins from "./caveGoblinsInfo"

const factionsArr=[caveGoblins,breakers]

factionsArr.sort((a,b)=>a.name>b.name ? 1: -1)

export {factionsArr}