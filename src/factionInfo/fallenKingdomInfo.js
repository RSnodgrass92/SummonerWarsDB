//summoner
import fallenKingdomSummoner from "../assets/fallenKingdom/cards-fallen_kingdom-ret-talus.png"

//champions
import dragos from "../assets/fallenKingdom/cards-fallen_kingdom-dragos.png"
import elutBal from "../assets/fallenKingdom/cards-fallen_kingdom-elut-bal.png"
import gulDass from "../assets/fallenKingdom/cards-fallen_kingdom-gul-dass.png"

//units
import hellfireCultist from "../assets/fallenKingdom/cards-fallen_kingdom-hellfire_cultist.png"
import undeadArcher from "../assets/fallenKingdom/cards-fallen_kingdom-undead_archer.png"
import undeadCarrier from "../assets/fallenKingdom/cards-fallen_kingdom-undead_carrier.png"
import undeadWarrior from "../assets/fallenKingdom/cards-fallen_kingdom-undead_warrior.png"

//events
import bloodSummon from "../assets/fallenKingdom/cards-fallen_kingdom-blood_summon.png"
import hellforgedWeapon from "../assets/fallenKingdom/cards-fallen_kingdom-hellforged_weapon.png"
import purge from "../assets/fallenKingdom/cards-fallen_kingdom-purge.png"
import sacrificialPyre from "../assets/fallenKingdom/cards-fallen_kingdom-sacrificial_pyre.png"

const fallenKingdom= {name: "Fallen Kingdom", summoner: fallenKingdomSummoner, champions: [dragos, elutBal, gulDass].sort(), units:[hellfireCultist, undeadArcher, undeadCarrier, undeadWarrior].sort(), events:[bloodSummon,hellforgedWeapon,purge,sacrificialPyre].sort()}


export default fallenKingdom