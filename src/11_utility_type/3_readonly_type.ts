/**
 * readonly type
 */
interface Cat {
    name:string;
    age:number;
}

const nayong: Cat = {
    name:'냐옹이',
    age:5,
}

nayong.name = '냐옹이2';

const bori: Readonly<Cat> = {
    name:'bori',
    age:5,
}

// bori.name = 'bori2' // error