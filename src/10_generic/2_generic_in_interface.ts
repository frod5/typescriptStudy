/**
 * generic in interface
 */
interface Cache<T> {
    data: T[];
    lastUpdate: Date;
}

const cache1: Cache<string> = {
    data: ['data1', 'data2'],
    lastUpdate: new Date(),
}

const cache2: Cache<number> = {  //타입 생략 불가
    data: [123, 456],
    lastUpdate: new Date(),
}

interface DefaultGeneric<T = string> {
    data: T[];
}

const cache3: DefaultGeneric = {
    data: ['string']
}