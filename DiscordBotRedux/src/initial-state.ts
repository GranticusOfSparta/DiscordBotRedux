import { RootState } from "./models";
import { Maybe } from "./monads";

export function getInitialState(): RootState {
    return {
        say: Maybe.nothing()
    }
}