import isValidCard from "../src/utils/is-valid-card";

describe('isValidCard', () => {
    it('should return true for a valid card', () => {
        const card = '10H';
        const result = isValidCard(card);
        expect(result).toBe(true);
    });

    it('should return false for an invalid card', () => {
        const card = '1H';
        const result = isValidCard(card);
        expect(result).toBe(false);
    });
});
