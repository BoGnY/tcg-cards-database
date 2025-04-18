import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Blastoise ex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	stage: "Stage2",
	evolveFrom: {
		en: "Wartortle"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Surf"
		},

		damage: "40"
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Hydro Bazooka"
		},

		effect: {
			en: "If this Pokémon has at least 2 extra [Water] Energy attached, this attack does 60 more damage."
		},

		damage: "100+"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Four Diamond"
}

export default card
