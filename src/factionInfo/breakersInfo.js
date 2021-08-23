//summoner
import breakersSummoner from "../assets/breakers/cards-breakers-tacullu.png"

//champions
import gulldune from "../assets/breakers/cards-breakers-gulldune.png"
import gwalwark from "../assets/breakers/cards-breakers-gwalark.png"
import kalal from "../assets/breakers/cards-breakers-kalal.png"

//units
import deceiver from "../assets/breakers/cards-breakers-deceiver.png"
import mindWitch from "../assets/breakers/cards-breakers-mind_witch.png"
import windArcher from "../assets/breakers/cards-breakers-wind_archer.png"
import windMage from "../assets/breakers/cards-breakers-wind_mage.png"

//events
import blast from "../assets/breakers/cards-breakers-blast_1.png"
import hypnoticCall from "../assets/breakers/cards-breakers-hypnotic_call.png"
import mindControl from "../assets/breakers/cards-breakers-mind_control.png"
import perplexingTempest from "../assets/breakers/cards-breakers-perplexing_tempest.png"

const factionBreakers= {name: "Breakers", summoner: breakersSummoner, champions: [gulldune, gwalwark,kalal].sort(), units:[deceiver, windArcher, windMage, mindWitch].sort(), events:[perplexingTempest,mindControl,hypnoticCall,blast].sort()}


export default factionBreakers