/**
 * property decorator
 */
class UserModel {
    @PropertyLogger
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}

function PropertyLogger(target: any, prpertyKey: string) {
    console.log(`${prpertyKey}: Property decorator`);
}
