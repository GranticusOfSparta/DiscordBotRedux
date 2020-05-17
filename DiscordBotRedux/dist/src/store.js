"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_observable_1 = require("redux-observable");
const redux_1 = require("redux");
const reducers_1 = require("./reducers");
const epics_1 = require("./epics");
const initial_state_1 = require("./initial-state");
const redux_logger_1 = require("redux-logger");
exports.initializeState = () => {
    const logger = redux_logger_1.createLogger({
    // ...options
    });
    const epicMiddleware = redux_observable_1.createEpicMiddleware();
    const rootEpic = (action$, store$, dependencies) => redux_observable_1.combineEpics(...epics_1.rootEpics)(action$, store$, dependencies);
    let store = redux_1.createStore(reducers_1.rootReducers, initial_state_1.getInitialState(), redux_1.applyMiddleware(epicMiddleware, logger));
    epicMiddleware.run(rootEpic);
    return store;
};
//# sourceMappingURL=store.js.map