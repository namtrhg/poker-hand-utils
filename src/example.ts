import {
	createPokerHand,
	getDescription,
	handToString,
	getEvaluatedScore,
	getRank,
	updateHand,
	compareTo,
} from "./index";

// Example usage of createPokerHand
const handString = "AH, KH, QH, JH, 10H"; // Royal Flush
const pokerHand = createPokerHand(handString);
console.log(`Created Poker Hand: ${handToString(pokerHand)}`);

// Example usage of getDescription
const description = getDescription(pokerHand);
console.log(`Description: ${JSON.stringify(description)}`);

// Example usage of getEvaluatedScore
const score = getEvaluatedScore(pokerHand);
console.log(`Evaluated Score: ${score}`);

// Example usage of getRank
const rank = getRank(pokerHand);
console.log(`Rank: ${rank}`);

// Example usage of updateHand
const newHandString = "2H, 3H, 4H, 5H, 6H"; // Straight Flush
const updatedPokerHand = updateHand(pokerHand, newHandString);
console.log(`Updated Poker Hand: ${handToString(updatedPokerHand)}`);

// Example usage of compareTo
const comparisonResult = compareTo(pokerHand, updatedPokerHand);
console.log(
	`Comparison Result: ${
		comparisonResult === 1
			? "First hand wins"
			: comparisonResult === 2
			? "Second hand wins"
			: "Draw"
	}`,
);
