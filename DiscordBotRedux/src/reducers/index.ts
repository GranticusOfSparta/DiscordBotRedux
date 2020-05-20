import { combineReducers } from "redux";
import { sayReducer } from "./default";
import flatCombineReducers from 'flat-combine-reducers';
import { fromEventPattern } from "rxjs";
let rootReducers = combineReducers({
    say: sayReducer
})
console.log(rootReducers);
export { rootReducers }