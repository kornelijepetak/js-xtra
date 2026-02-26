export class Dictionary<K, V> extends Map<K, V> {
    constructor (entries?: Iterable<readonly [K, V]> | null) {
        super(entries)
    }

    withUpdated (key: K, value: V): Dictionary<K, V> {
        const newDict = new Dictionary<K, V>(this)
        newDict.set(key, value)
        return newDict
    }
}
