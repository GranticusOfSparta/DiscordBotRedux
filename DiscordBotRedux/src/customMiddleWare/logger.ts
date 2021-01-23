import { Middleware } from "redux";
import * as _ from "lodash";
import { AboutAction, Action } from "../models/action";
export const logger: Middleware = (api) =>
    (next) =>
        (action: Action) => {
            const plainAction: Action = { type: action.type, payload: action.payload, aboutAction: action.aboutAction ? action.aboutAction : AboutAction.DEFUALT }

            console.groupCollapsed(action.type);
            console.log('prev state', api.getState());
            console.log('action', plainAction)
            const result = next(action);
            console.log('next state', api.getState());
            console.groupEnd();
            return result;
        };