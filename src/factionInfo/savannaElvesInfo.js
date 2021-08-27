//summoner
import savannaElvesSummoner from "../assets/savannaElves/cards-savanna_elves-abua_shi.png"

//champions
import makeindaRu from "../assets/savannaElves/cards-savanna_elves-makeinda_ru.png"
import mitiKyru from "../assets/savannaElves/cards-savanna_elves-miti_kyru.png"
import mitiMumway from "../assets/savannaElves/cards-savanna_elves-miti_mumway.png"

//units
import borderArcher from "../assets/savannaElves/cards-savanna_elves-border_archer.png"
import lioness from "../assets/savannaElves/cards-savanna_elves-lioness.png"
import rhinoceros from "../assets/savannaElves/cards-savanna_elves-rhinoceros.png"
import spiritMage from "../assets/savannaElves/cards-savanna_elves-spirit_mage.png"

//events
import chantOfEntangling from "../assets/savannaElves/cards-savanna_elves-chant_of_entangling.png"
import chantOfGrowth from "../assets/savannaElves/cards-savanna_elves-chant_of_growth.png"
import chantOfPower from "../assets/savannaElves/cards-savanna_elves-chant_of_power.png"
import chantOfWeaving from "../assets/savannaElves/cards-savanna_elves-chant_of_weaving.png"

const savannaElves= {name: "Savanna Elves", summoner: savannaElvesSummoner, champions: [makeindaRu, mitiKyru, mitiMumway].sort(), units:[borderArcher, lioness, rhinoceros, spiritMage].sort(), events:[chantOfEntangling, chantOfGrowth, chantOfPower, chantOfWeaving].sort()}

export default savannaElves