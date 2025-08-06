/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Determines whether the lasagna is done.
 * @param timer {number} timer of cooking.
 * @return {string} status of cooking.
 */
export function cookingStatus(timer) {
    if (timer === 0) {
        return 'Lasagna is done.';
    }
    if (!timer) {
        return 'You forgot to set the timer.';
    }
    return 'Not done, please wait.';
}

/**
 * Estimates the preparation time.
 * @param layers {string[]} an array of layers.
 * @param timePerLayer {number} the average preparation time per layer in minutes.
 * @return {number} the estimate for the total preparation time based on the number of layers.
 */
export function preparationTime(layers, timePerLayer = 2) {
    return layers.length * timePerLayer;
}

/**
 * Computes the amounts of noodles and sauce needed.
 * @param layers {string[]} an array of layers.
 * @return {Quantities} an object with keys noodles and sauce.
 */
export function quantities(layers) {
    return {
        noodles: layers.filter(layer => layer === 'noodles').length * 50,
        sauce: layers.filter(layer => layer === 'sauce').length * 0.2,
    };
}

/**
 * Adds the secret ingredient (add the last item from your friend's list to the end of your list).
 * @param friendList {string[]} the list your friend sent you.
 * @param myList {string[]} the ingredient list for your own recipe.
 */
export function addSecretIngredient(friendList, myList) {
    myList.push(friendList[friendList.length - 1]);
}

/**
 * Scales the recipe.
 * @param recipe {{}} the amounts needed for 2 portions.
 * @param portions {number} The number of portions you want to cook.
 * @return {{}} a recipe object with the amounts needed for the desired number of portions.
 */
export function scaleRecipe(recipe, portions = 2) {
    const newRecipe = {};
    for (const key in recipe) {
        newRecipe[key] = recipe[key] * (portions / 2);
    }
    return newRecipe;
}
