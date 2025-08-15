/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
    let price = 0;
    switch (pizza) {
        case 'Margherita':
            price += 7;
            break;
        case 'Caprese':
            price += 9;
            break;
        default:
            price += 10;
    }

    // It's a suboptimal approach, just to get the assignment done:
    function calculateExtras(index) {
        if (index >= extras.length) {
            return 0;
        }
        return (extras[index] === 'ExtraSauce' ? 1 : 2) +
            calculateExtras(index + 1);
    }

    return price + calculateExtras(0);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
    // Recursion Function -> Maximum call stack size exceeded!
    let price = 0;
    for (const pizzaOrder of pizzaOrders) {
        switch (pizzaOrder.pizza) {
            case 'Margherita':
                price += 7;
                break;
            case 'Caprese':
                price += 9;
                break;
            default:
                price += 10;
        }
        pizzaOrder.extras.forEach(extra => {
            price += extra === 'ExtraSauce' ? 1 : 2;
        });
    }
    return price;
}
