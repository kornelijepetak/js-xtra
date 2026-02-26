import { expect, test } from "vitest"
import { Dictionary } from "../map-xtra"

test("Dictionary extends from Map", () => {
    var dict = new Dictionary<string, number>()
    expect(dict).toBeInstanceOf(Map)
})

test("Dictionary.withUpdated returns a new Dictionary with the updated key-value pair", () => {
    const data: Iterable<readonly [number, number]> = [
        [1, 10],
        [2, 20],
        [3, 30],
    ]

    var dict = new Dictionary<number, number>(data)
    const newDict = dict.withUpdated(4, 40)

    expect(newDict).not.toBe(dict)
    expect(newDict.get(4)).toBe(40)
    expect(dict.get(4)).toBeUndefined()
})
