/**
 * generic in type
 */
type GenericSimpleType<T> = T;

let genericString: GenericSimpleType<string>;
genericString = '1234';

interface DoneState<T> {
    data: T[];
}

interface LoadingState {
    requestedAt: Date;
}

interface ErrorState {
    error: string;
}

type State<T> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
    data: ['123','456'],
}

state = {
    requestedAt: new Date(),
}

state = {
    error : 'error'
}

