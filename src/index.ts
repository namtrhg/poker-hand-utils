import sanitize from "./utils/sanitize";
import evalHand from "./utils/eval-hand";
import evalRank from "./utils/eval-rank";

interface PokerHand {
	hand: string[];
	score: number;
	rank: string;
}

const createPokerHand = (handString: string): PokerHand => {
	const hand = sanitize(handString);
	const score = evalHand(hand);
	const rank = evalRank(score);
	return { hand, score, rank };
};

const getDescription = (
	pokerHand: PokerHand,
): { hand: string[]; score: number; rank: string } => {
	return {
		hand: pokerHand.hand,
		score: pokerHand.score,
		rank: pokerHand.rank,
	};
};

const handToString = (pokerHand: PokerHand): string => {
	return pokerHand.hand.join(" ");
};

const getEvaluatedScore = (pokerHand: PokerHand): number => {
	return pokerHand.score;
};

const getRank = (pokerHand: PokerHand): string => {
	return pokerHand.rank;
};

const updateHand = (pokerHand: PokerHand, handString: string): PokerHand => {
	const hand = sanitize(handString);
	const score = evalHand(hand);
	const rank = evalRank(score);
	return { hand, score, rank };
};

const compareTo = (hand1: PokerHand, hand2: PokerHand): number => {
	if (hand1.score < hand2.score) {
		return 1; // Win
	}

	if (hand1.score > hand2.score) {
		return 2; // Loss
	}

	if (hand1.score === hand2.score) {
		return 3; // Draw
	}

	throw new Error("Incorrect hand");
};

export {
	createPokerHand,
	getDescription,
	handToString,
	getEvaluatedScore,
	getRank,
	updateHand,
	compareTo,
};
