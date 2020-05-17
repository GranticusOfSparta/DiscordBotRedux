import { Middleware, Action } from "redux";
import * as _ from "lodash";
export const logger: Middleware = (api) =>
    (next) =>
        (action) => {
            const plainAction = { type: action.type, payload: action.payload }

            console.groupCollapsed(action.type);
            console.log('prev state', api.getState());
            console.log('action', plainAction)
            const result = next(action);
            console.log('next state', api.getState());
            console.groupEnd();
            return result;
        };