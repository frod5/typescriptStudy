/**
 * class defining
 */

class SampleClass {

}

class Game {
    name: string;
    country: string;
    download: number;


    constructor(name: string, country: string, download: number) {
        this.name = name;
        this.country = country;
        this.download = download;
    }

    introduce() {
        return `${this.name} ${this.country} ${this.download}`;
    }
}

const starcraft = new Game('starcraft','usa', 10);
console.log(starcraft.introduce());