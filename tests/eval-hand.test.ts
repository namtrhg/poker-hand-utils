import evalHand from "../src/utils/eval-hand";

describe("evalHand", () => {
	it("should evaluate a Royal Flush correctly", () => {
		const hand = ["AH", "KH", "QH", "JH", "10H"];
		const rank = evalHand(hand);
		expect(rank).toBe("Royal Flush");
	});
});
