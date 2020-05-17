import { Middleware, Action } from "redux";
import * as _ from "lodash";
export const classToObject: Middleware = (api) =>
    (next) =>
        (action) => {
            const plainAction = { type: action.type, payload: action.payload }
            const result = next(Object.assign({}, _.cloneDeep(plainAction)));
            return result;
        };