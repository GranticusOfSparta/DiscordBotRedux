import { ofType } from "redux-observable";
import { DefaultActions } from "../actions";
import { SaySuccess, Say, CMDExecutionError } from "../actions/default";
import { tap, map, catchError, filter } from 'rxjs/operators'
import { bot } from '../bot'
export const sayEpic = (action$, store$, dependencies) => {
    return action$.pipe(
        ofType(DefaultActions.ActionTypes.SAY),
        tap((action: Say) => {
            bot.sendMessage({
                to: action.payload.channelID,
                message: action.payload.message
            })
        }),
        map(() => {
            return { type: DefaultActions.ActionTypes.SAY_SUCCESS }
        })
        // filter(() => false)
    )
};

export const defaultEpics = [sayEpic];