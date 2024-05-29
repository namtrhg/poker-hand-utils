import isValidCard from './is-valid-card';

/**
 * sanitize - verify the hand string passed is correct
 * otherwise it throws an error
 *
 * @param  {string} hand string representing a five cards hand
 * @return {string[]} return an array with 5 cards in UpperCase
 */
const sanitize = (hand: string): string[] => {
  if (!hand) {
    throw new Error('Hand must be defined');
  }

  if (typeof(hand) !== 'string') {
    throw new Error('Hand must be a String');
  }

  if (hand.trim().length !== 14) {
    throw new Error('Incorrect hand');
  }

  const handAsArray = hand.toUpperCase().trim().split(' ');

  if (handAsArray.length !== 5) {
    throw new Error('Incorrect hand');
  }

  if (new Set(handAsArray).size !== 5) {
    throw new Error('Hand has duplicates');
  }

  if (handAsArray.filter(isValidCard).length !== 5) {
    throw new Error('Incorrect hand');
  }

  return handAsArray;
};

export default sanitize;
