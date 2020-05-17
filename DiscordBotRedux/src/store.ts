import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from './reducers';
import { rootEpics } from './epics';
import { Client } from "discord.io"
import { DefaultActions } from './actions';
import { getInitialState } from './initial-state';
import { dispatch } from 'rxjs/internal/observable/range';
import { createLogger } from 'redux-logger'
import { classToObject } from './customMiddleWare/classToObject';
import { logger } from './customMiddleWare/logger';


export const initializeState = () => {


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



