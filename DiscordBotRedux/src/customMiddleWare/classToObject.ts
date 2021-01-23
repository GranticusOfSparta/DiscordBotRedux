import { Middleware } from "redux";
import { Action, AboutAction } from '../models/action'
import * as _ from "lodash";
export const classToObject: Middleware = (api) =>
    (next) =>
        (action: Action) => {
            const plainAction: Action = { type: action.type, payload: action.payload, aboutAction: action.aboutAction ? action.aboutAction : AboutAction.DEFUALT }
            const result = next(Object.assign({}, _.cloneDeep(plainAction)));
            return result;
        };