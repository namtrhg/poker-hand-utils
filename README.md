
# Poker Hand Utils

This utility library for evaluating poker hands an upgrade version of https://github.com/codeKonami/poker-hand with adding support for TypeScript.

Evaluate the score (the lower the better) of a poker hand as described in this post blog : http://suffe.cool/poker/evaluator.html. You can compare two poker hands to find out who wins or if it's a tie.

## Installation

You can install the library using npm:

```sh
npm install poker-hand-utils
```

or with yarn:

```sh
yarn add poker-hand-utils
```

## Usage

### Importing the Library

First, import the necessary functions from the library:

```typescript
import { createPokerHand, getDescription, handToString, getEvaluatedScore, getRank, updateHand, compareTo } from 'poker-hand-utils';
```

### Functions

#### `createPokerHand`

Creates a poker hand from a string.

**Parameters:**
- `handString`: A string representing the poker hand (e.g., "AS KS QS JS TS").

**Returns:**
- An object representing the poker hand, including the hand, score, and rank.

**Example:**

```typescript
const handString = "AS KS QS JS TS";
const pokerHand = createPokerHand(handString);

console.log(pokerHand);
```

#### `getDescription`

Returns a description of the poker hand.

**Parameters:**
- `pokerHand`: A `PokerHand` object.

**Returns:**
- An object containing the hand, score, and rank.

**Example:**

```typescript
const description = getDescription(pokerHand);
console.log(description);
```

#### `handToString`

Returns the poker hand as a string.

**Parameters:**
- `pokerHand`: A `PokerHand` object.

**Returns:**
- A string representing the poker hand.

**Example:**

```typescript
const handStr = handToString(pokerHand);
console.log(handStr); // Output: "AS KS QS JS TS"
```

#### `getEvaluatedScore`

Returns the evaluated score of the poker hand.

**Parameters:**
- `pokerHand`: A `PokerHand` object.

**Returns:**
- A number representing the score of the poker hand.

**Example:**

```typescript
const score = getEvaluatedScore(pokerHand);
console.log(score); // Output: (some numeric score)
```

#### `getRank`

Returns the rank of the poker hand.

**Parameters:**
- `pokerHand`: A `PokerHand` object.

**Returns:**
- A string representing the rank of the poker hand.

**Example:**

```typescript
const rank = getRank(pokerHand);
console.log(rank); // Output: (rank string based on score)
```

#### `updateHand`

Updates the poker hand with a new hand string.

**Parameters:**
- `pokerHand`: A `PokerHand` object.
- `handString`: A new hand string.

**Returns:**
- An updated `PokerHand` object.

**Example:**

```typescript
const newHandString = "2D 3D 4D 5D 6D";
const updatedPokerHand = updateHand(pokerHand, newHandString);

console.log(updatedPokerHand);
```

#### `compareTo`

Compares two poker hands.

**Parameters:**
- `hand1`: A `PokerHand` object.
- `hand2`: A `PokerHand` object.

**Returns:**
- `1` if `hand1` wins, `2` if `hand2` wins, `3` if it's a draw.

**Example:**

```typescript
const anotherHandString = "2D 3D 4D 5D 6D";
const anotherPokerHand = createPokerHand(anotherHandString);

const result = compareTo(pokerHand, anotherPokerHand);

if (result === 1) {
  console.log('Hand 1 wins');
} else if (result === 2) {
  console.log('Hand 2 wins');
} else {
  console.log('It's a draw');
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.