/**
 * generic in promise
 */
const afterTwoSeconds = () => {
    return new Promise((resolve) => setTimeout(() => {
        resolve('done')
    }, 2000));
}

const runner = async () => {
    const res = await afterTwoSeconds();
    console.log(res);
}

runner();

const afterOneSecond = async () : Promise<string> => {
    return new Promise((resolve) => setTimeout(() => {
        resolve('done')
    }, 1000));
}

const runner2 = async () => {
    const res = await afterOneSecond();
    console.log(res);
}

runner2()