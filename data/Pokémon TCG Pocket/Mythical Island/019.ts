import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon"
	},

	illustrator: "LINNE",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid's."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wash Out"
		},

		effect: {
			en: "As often as you like during your turn, you may move a [Water] Energy from 1 of your Benched [Water] Pokémon to your Active [Water] Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Wave Splash"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond"
}

export default card
