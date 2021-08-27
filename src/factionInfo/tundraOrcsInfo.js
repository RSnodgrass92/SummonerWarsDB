//summoner
import tundraOrcsSummoner from "../assets/tundraOrcs/cards-tundra_orcs-grognack.png"

//champions
import ragnor from "../assets/tundraOrcs/cards-tundra_orcs-ragnor.png"
import shonk from "../assets/tundraOrcs/cards-tundra_orcs-shonk.png"
import targan from "../assets/tundraOrcs/cards-tundra_orcs-targan.png"

//units
import frostShaman from "../assets/tundraOrcs/cards-tundra_orcs-frost_shaman.png"
import smasher from "../assets/tundraOrcs/cards-tundra_orcs-smasher.png"
import tundraCharger from "../assets/tundraOrcs/cards-tundra_orcs-tundra_charger.png"
import tundraFighter from "../assets/tundraOrcs/cards-tundra_orcs-tundra_fighter.png"

//events
import brutalForce from "../assets/tundraOrcs/cards-tundra_orcs-brutal_force.png"
import forGlory from "../assets/tundraOrcs/cards-tundra_orcs-for_glory.png"
import freeze from "../assets/tundraOrcs/cards-tundra_orcs-freeze.png"
import primalFury from "../assets/tundraOrcs/cards-tundra_orcs-primal_fury.png"

const tundraOrcs= {name: "Tundra Orcs", summoner: tundraOrcsSummoner, champions: [ragnor, shonk, targan].sort(), units:[frostShaman, smasher, tundraCharger, tundraFighter].sort(), events:[brutalForce, forGlory, freeze, primalFury].sort()}

export default tundraOrcs