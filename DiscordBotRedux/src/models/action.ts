// export interface Action<T = any> {
//     type: string,
//     payload?: T
// }
export enum AboutAction {
    INITIAL_ACTION = "INITIAL_ACTION",
    DEFUALT = "DEFAULT"
}
export class Action<T = any>  {
    constructor(public type: string, public payload?: T, public aboutAction?: AboutAction) { }
}
