import { Action } from 'redux';
import { Observable } from 'rxjs';
// Long Version
export const ofType = (t: string) => (source: Observable<any>) =>
    new Observable(observer => {
        return source.subscribe({
            next(action: Action) {
                if (action.type === t)
                    observer.next(
                        action
                    );
            },
            error(err) { observer.error(err); },
            complete() { observer.complete(); }
        });
    });