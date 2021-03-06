import { MessageEventData } from './../models/message-event-data';
import { Maybe } from '../monads';
import { DefaultActions } from '../actions';
export function sayReducer(state = Maybe.of(null), action: DefaultActions.Say): Maybe<MessageEventData> {
    switch (action.type) {
        case DefaultActions.ActionTypes.SAY:
            return Maybe.of(action.payload)
        default:
            return state
    }
}

