import breakers from "./breakersInfo"
import caveGoblins from "./caveGoblinsInfo"
import fallenKingdom from "./fallenKingdomInfo"
import phoenixElves from "./phoenixElvesInfo"
import polarDwarves from "./polarDwarvesInfo"
import savannaElves from "./savannaElvesInfo"
import tundraOrcs from "./tundraOrcsInfo"
import vanguards from "./vanguardsInfo"

const factionsArr=[caveGoblins, breakers, fallenKingdom, phoenixElves, polarDwarves, savannaElves, tundraOrcs, vanguards]

factionsArr.sort((a,b)=>a.name>b.name ? 1: -1)

export {factionsArr}