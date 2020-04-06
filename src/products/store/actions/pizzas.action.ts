import { Action } from '@ngrx/store';

import { Pizza } from 'src/products/models/pizza.model';

// load pizzas
export const LOAD_PIZZAS = '[Products] Load pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load pizzas Success';
// create pizza
export const CREATE_PIZZA = '[Products] Create pizza';
export const CREATE_PIZZA_FAIL = '[Products] Create pizza fail';
export const CREATE_PIZZA_SUCCESS = '[Products] Create pizza success';
//update pizza
export const UPDATE_PIZZA = '[Products] Update pizza';
export const UPDATE_PIZZA_FAIL = '[Products] Update pizza fail';
export const UPDATE_PIZZA_SUCCESS = '[Products] Update pizza success';
//remove pizza
export const REMOVE_PIZZA = '[Products] Remove pizza';
export const REMOVE_PIZZA_FAIL = '[Products] Remove pizza fail';
export const REMOVE_PIZZA_SUCCESS = '[Products] Remove pizza success';

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

export class CreatePizza implements Action {
  readonly type = CREATE_PIZZA;
  constructor(public payload: Pizza) { }
}

export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) { }
}
export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZA_FAIL;
  constructor(public payload: any) { }
}

export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA;
  constructor(public payload: Pizza) { }
}

export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) { }
}
export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZA_FAIL;
  constructor(public payload: any) { }
}

export class RemovePizza implements Action {
  readonly type = REMOVE_PIZZA;
  constructor(public payload: Pizza) { }
}

export class RemovePizzaSuccess implements Action {
  readonly type = REMOVE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) { }
}
export class RemovePizzaFail implements Action {
  readonly type = REMOVE_PIZZA_FAIL;
  constructor(public payload: any) { }
}
// action types0
export type PizzasAction = 
    LoadPizzas 
  | LoadPizzasFail 
  | LoadPizzasSucces
  | CreatePizza
  | CreatePizzaSuccess
  | CreatePizzaFail
  | UpdatePizza
  | UpdatePizzaSuccess
  | UpdatePizzaFail
  | RemovePizza
  | RemovePizzaSuccess
  | RemovePizzaFail;
