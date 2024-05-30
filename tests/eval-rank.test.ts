import evalRank from "../src/utils/eval-rank";

describe("evalRank", () => {
	it("should evaluate the rank of a Royal Flush correctly", () => {
		const hand = 10;
		const rank = evalRank(hand);
		expect(rank).toBe(10); // Assuming Royal Flush is ranked as 10
	});
});
