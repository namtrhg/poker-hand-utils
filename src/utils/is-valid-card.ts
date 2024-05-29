import { ranks, suits } from '../arrays';

/**
 * Check if valid card
 * @param {string} card - A string containing two characters.
 * @return {boolean} true if exists, false otherwise
 */
const isValidCard = (card: string): boolean => {
  if (!card || card === '' || typeof(card) !== 'string' || card.length !== 2) {
    return false;
  }

  if (ranks.get(card[0].toUpperCase()) === undefined) {
    return false;
  }

  if (suits.get(card[1].toUpperCase()) === undefined) {
    return false;
  }

  return true;
};

export default isValidCard;
