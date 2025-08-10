// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
    return deck.map(number => number * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
    return deck.reduce((result, number) => {
        number === 3 ? result.push(number, number, number) : result.push(number);
        return result;
    }, []);
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
    // It works for odd or even number of cards:
    const firstMiddleItemIndex = Math.floor((deck.length - 1) / 2);
    return deck.length % 2 === 0 ?
        deck.slice(firstMiddleItemIndex, firstMiddleItemIndex + 2) :
        deck.slice(firstMiddleItemIndex);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
    // It works for odd or even number of cards:
    const lastElement = deck.pop(),
        firstElement = deck.shift();
    deck.splice(Math.ceil((deck.length - 1) / 2), 0,
        lastElement, firstElement);
    return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
    return deck.filter(number => number === 2);
}

/**
 * Returns a perfect order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
    return deck.sort((number1, number2) =>
        number1 - number2);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
    return deck.reverse();
}
