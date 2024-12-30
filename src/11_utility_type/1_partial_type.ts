/**
 * partial type
 * 부분
 */
interface Model {
    name:string;
    age:number;
    group: string
}

const model1 : Model = {
    name:'kim',
    age:10,
    group: 'group1'
}

const updateModel = (original: Model, updates: Partial<Model>) => {
    return {
        ...original,
        ...updates
    }
}

console.log(updateModel(model1, {
    name:'lee'
}))