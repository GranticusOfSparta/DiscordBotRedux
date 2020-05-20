import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from './reducers';
import { rootEpics } from './epics';
import { getInitialState } from './initial-state';
import { classToObject } from './customMiddleWare/classToObject';
import { logger } from './customMiddleWare/logger';


export const initializeState = () => {

    debugger;
    const epicMiddleware = createEpicMiddleware();

    const rootEpic = (action$, store$, dependencies) =>
        combineEpics(...rootEpics)(action$, store$, dependencies)


    let store = createStore(
        rootReducers,
        getInitialState(),
        applyMiddleware(epicMiddleware, logger, classToObject)
    );
    epicMiddleware.run(rootEpic);
    return store;

}



