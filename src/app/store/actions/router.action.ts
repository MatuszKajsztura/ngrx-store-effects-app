import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const GO = '[Router] navigate';
export const BACK = '[Router] back';
export const FORWARD = '[Router] forward';

export class Go implements Action {
    type = GO;
    constructor(
        public payload: {
            path: any[],
            query?: object,
            extras?: NavigationExtras
        }
    ) { }
}

export class Back implements Action {
    type = BACK;
}

export class Forward implements Action {
    type = FORWARD;
}

export type RouterActions = Go | Back | Forward;