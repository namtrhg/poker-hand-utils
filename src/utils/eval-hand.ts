import { suits, ranks, products, flushes, unique5, values } from '../arrays';

const cardInt = (card: string): number => {
  const [order, prime] = ranks.get(card[0])!;
  const suit = suits.get(card[1])!;
  return prime | (order << 8) | suit | (1 << (16 + order));
}

const findIt = (key: number): number => {
    let low = 0;
    let high = 4887;
    let mid: number;

    while (low <= high) {
      mid = (high + low) >> 1;
      if (key < products[mid]) {
          high = mid - 1;
      } else if (key > products[mid]) {
        low = mid + 1;
      } else {
        return mid;
      }
    }
    throw new Error('Impossible hand');
};

/**
 * Credit to Cactus Kev's algorithm
 * http://suffe.cool/poker/code/pokerlib.c
 */
const evalHand = (hand: string[]): number => {
  const cards = hand.map(cardInt);
  const q = (cards[0] | cards[1] | cards[2] | cards[3] | cards[4]) >> 16;

  if (cards[0] & cards[1] & cards[2] & cards[3] & cards[4] & 0xF000) {
    return flushes[q];
  }

  const s = unique5[q];
  if (s) {
    return s;
  }

  const l = (cards[0] & 0xFF) * (cards[1] & 0xFF) * (cards[2] & 0xFF) * (cards[3] & 0xFF) * (cards[4] & 0xFF);
  const m = findIt(l);
  return values[m];
};

export default evalHand;
