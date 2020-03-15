import { Action } from '@ngrx/store';

import { Pizza } from 'src/products/models/pizza.model';

export const LOAD_PIZZAS = '[Products] Load pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load pizzas Success';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasSucces implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public paylaod: Pizza[]) { }
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public paylaod: any) { }
}

// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSucces;
