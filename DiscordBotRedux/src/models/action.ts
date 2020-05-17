// export interface Action<T = any> {
//     type: string,
//     payload?: T
// }
export class Action<T = any>  {
    constructor(public type: string, public payload?: T) { }
}