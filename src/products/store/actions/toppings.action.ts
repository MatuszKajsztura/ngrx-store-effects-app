import { Action } from '@ngrx/store';
import { Topping } from 'src/products/models/topping.model';

export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';

export class LoadToppings implements Action {
    readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsSucces implements Action {
    readonly type = LOAD_TOPPINGS_SUCCESS;
    constructor(public payload: Topping[]) {}
}

export class LoadToppingsFail implements Action {
    readonly type = LOAD_TOPPINGS_FAIL;
    constructor(public payload: any) {}
}

export type ToppingsAction = LoadToppings | LoadToppingsSucces | LoadToppingsFail;