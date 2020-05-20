import { MessageEventData } from './../models/message-event-data';
import { Maybe } from '../monads';
import { DefaultActions } from '../actions';
export function sayReducer(state, action: DefaultActions.Say): Maybe<MessageEventData> {
    debugger;
    switch (action.type) {
        case DefaultActions.ActionTypes.SAY:
            return Maybe.of(action.payload)
        default:
            return state ? state : Maybe.nothing();
    }
}

