import { combineReducers } from "redux";
import { defaultReducers } from "./default";
import flatCombineReducers from 'flat-combine-reducers';
import { fromEventPattern } from "rxjs";
let rootReducers = flatCombineReducers([...defaultReducers])
export { rootReducers }