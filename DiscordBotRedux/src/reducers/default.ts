import { RootState } from './../models';
import { Action } from 'redux'
import { Maybe } from '../monads';
import { getInitialState } from '../initial-state';
import { DefaultActions } from '../actions';
function sayReducer(state = getInitialState(), action: DefaultActions.Say): RootState {
    console.log("I'm about to compare", action.type)
    switch (action.type) {
        case DefaultActions.ActionTypes.SAY:
            return { ...state, say: Maybe.of(action.payload) }
    }
}

export const defaultReducers = [sayReducer];