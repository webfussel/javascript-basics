import { aFunction } from "./03_cycle_a.js";
export const bFunction = (a = 0) => {
    return a + 2
}

aFunction(1)

// import { somethingFromA } from "./03_cycle_a.js";
// export const somethingFromB = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: somethingFromA(),
// }
