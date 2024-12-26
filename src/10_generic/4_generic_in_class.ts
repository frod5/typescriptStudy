/**
 * generic in class
 */
class Pagination<Data, Message> {
    data: Data[] = []
    message?: Message
    lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();
pgData.data;
pgData.message;
pgData.lastFetchedAt;

class Pagination2<Data, Message> {
    data: Data[] = []
    message?: Message
    lastFetchedAt?: Date;

    constructor(data: Data[], message: Message, lastFetchedAt: Date) {
        this.data = data;
        this.message = message;
        this.lastFetchedAt = lastFetchedAt;
    }
}

const pgData2 = new Pagination2<number, string>([1234, 45667], 'message', new Date())
console.log(pgData2);