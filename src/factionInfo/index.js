
const factionsArr =[]

class Faction
 {
    constructor(factionName, summoner, unitsArr, eventsArr)
    {
        this.factionName= factionName
        this.summoner= summoner
        this.unitsArr= unitsArr
        this.eventsArr= eventsArr
    }

    add()
    {
        factionsArr.push(this)
        return this
    }
}

new Faction("Breakers").add()
new Faction("Cave Goblins").add()
new Faction("Fallen Kingdom").add()
new Faction("Phoenix Elves").add()
new Faction("Polar Dwarves").add()
new Faction("Savanna Elves").add()
new Faction("Tundra Orcs").add()
new Faction("Vanguards").add()

export {factionsArr}