/**
 * A Map of each suit : {C = Clubs, D = Diamond, H = Heart, S = Spades}
 */

const suits: Map<string, number> = new Map([
  ['C', 0x8000],
  ['D', 0x4000],
  ['H', 0x2000],
  ['S', 0x1000],
])

export default suits
