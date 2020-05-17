import { Maybe } from "../monads";
import { MessageEventData } from "./message-event-data";

export interface RootState {
    say: Maybe<MessageEventData>,
}