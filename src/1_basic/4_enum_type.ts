/**
 * enum
 */

/**
 * API 요청을한다.
 * 상태는 4가지
 *
 * 1) DONE - 요청 완료
 * 2) ERROR - 에러
 * 3) LOADING - 로딩
 * 4) INITIAL - 초기상태
 */

// STRING 비교 -> 오타 위험
function runWork() {
    let state = 'INITIAL';

    try {
        state = 'LOADING';
        // 작업~
        state = 'DONE'
    } catch (e) {
        state = 'ERROR';
    } finally {
        return state;
    }
}

// JS는 enum이 없어서 이런식으로 사용
const doneState = 'DONE'
const errorState = 'ERROR'
const loadState = 'LOADING'
const initialState = 'INITIAL'

function runWork2() {
    let state = initialState;

    try {
        state = loadState;
        // 작업~
        state = doneState
    } catch (e) {
        state = errorState;
    } finally {
        return state;
    }
}

console.log(runWork() === 'DONE');
console.log(runWork2() === doneState);

// ts enum
enum State {
    //초기화 안해주면 순서대로 0,1,2,3
    DONE ='DONE',
    ERROR = 'ERROR',
    LOADING = 'LOADING',
    INITIAL = 'INITIAL',
}

function runWork3() {
    let state = State.INITIAL;

    try {
        state = State.LOADING;
        // 작업~
        state = State.DONE;
    } catch (e) {
        state = State.DONE;
    } finally {
        return state;
    }
}

console.log(runWork3() === State.DONE);
console.log(runWork3())
