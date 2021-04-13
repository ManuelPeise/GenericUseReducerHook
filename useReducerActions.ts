export const SETSTATE = "SetState";

interface ISetState<T=any>{
    type: typeof SETSTATE,
    payload: T
}

export type UseReducerAction = ISetState