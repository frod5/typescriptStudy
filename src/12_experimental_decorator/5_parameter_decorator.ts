/**
 * parameter decorator
 */
class Cat {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance(@LogParam adj: string) {
        console.log(`${this.name}가 ${adj} 춤을 춥니다.`);
    }
}

const cat = new Cat('navi');
cat.dance('신나게')

function LogParam(target: any, prpertyKey: string, paramIndex: number) {
    console.log(`${paramIndex}번째 파라미터 ${prpertyKey}가 입력`)
}