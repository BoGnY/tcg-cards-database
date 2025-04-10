import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Leafeon ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Forest Breath"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may take a [Grass] Energy from your Energy Zone and attach it to 1 of your [Grass] Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Solar Beam"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card