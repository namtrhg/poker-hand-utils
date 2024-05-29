const evalRank = (score: number): string => {
  if (score > 6185) return 'HIGH_CARD';
  if (score > 3325) return 'ONE_PAIR';
  if (score > 2467) return 'TWO_PAIRS';
  if (score > 1609) return 'THREE_OF_A_KIND';
  if (score > 1599) return 'STRAIGHT';
  if (score > 322)  return 'FLUSH';
  if (score > 166)  return 'FULL_HOUSE';
  if (score > 10)   return 'FOUR_OF_A_KIND';
  if (score > 1) return 'STRAIGHT_FLUSH';
  return 'ROYAL_FLUSH';
};

export default evalRank;
