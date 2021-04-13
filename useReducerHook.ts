import React from 'react';
import {SETSTATE, UseReducerAction} from './useReducerActions'

interface TState<T>{
    data: T,
    dispatchState: (state: T) => void
}

const useGenericReducer = <T>(initState: T) : TState<T> =>{

    const [reducerState, updateState] = React.useReducer((state = initState, action: UseReducerAction) : T =>{
        switch(action.type){
            case SETSTATE:
                return{
                    ...state,
                    ...action.payload
                }   
            default:
                return{
                    ...state
                }
        }
    },initState);

    const dispatchState = (state: T) =>{
        updateState({type: "SetState", payload: state})
    }

    return{
        data: reducerState,
        dispatchState
    } 
}

export default useGenericReducer;



