//summoner
import vanguardsSummoner from "../assets/vanguards/cards-vanguards-sera_eldwyn.png"

//champions
import coleenBrighton from "../assets/vanguards/cards-vanguards-coleen_brighton.png"
import jacobEldwyn from "../assets/vanguards/cards-vanguards-jacob_eldwyn.png"
import valnaStoutheart from "../assets/vanguards/cards-vanguards-valna_stoutheart.png"

//units
import citadelArcher from "../assets/vanguards/cards-vanguards-citadel_archer.png"
import citadelKnight from "../assets/vanguards/cards-vanguards-citadel_knight.png"
import citadelPaladin from "../assets/vanguards/cards-vanguards-citadel_paladin.png"
import templePriest from "../assets/vanguards/cards-vanguards-temple_priest.png"

//events
import guardingSpirits from "../assets/vanguards/cards-vanguards-guarding_spirits.png"
import holyJudgement from "../assets/vanguards/cards-vanguards-holy_judgement.png"
import massHeal from "../assets/vanguards/cards-vanguards-mass_heal.png"
import renewedHope from "../assets/vanguards/cards-vanguards-renewed_hope.png"

const vanguards= {name: "Vanguards", summoner: vanguardsSummoner, champions: [coleenBrighton, jacobEldwyn, valnaStoutheart].sort(), units:[ citadelArcher, citadelKnight, citadelPaladin, templePriest].sort(), events:[guardingSpirits, holyJudgement, massHeal, renewedHope].sort()}


export default vanguards