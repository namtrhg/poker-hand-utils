import sanitize from "../src/utils/sanitize";

describe('sanitize', () => {
    it('should sanitize input correctly', () => {
        const input = ' 10H, JH, QH, KH, AH ';
        const sanitized = sanitize(input);
        expect(sanitized).toBe('10H,JH,QH,KH,AH');
    });
});
