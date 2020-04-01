import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import * as fromPizzasReducer from "./pizzas.reducers";
import * as fromToppingsReducer from "./toppings.reducers";

export interface ProductsState {
  pizzas: fromPizzasReducer.PizzaState;
  toppings: fromToppingsReducer.ToppingsState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzasReducer.reducer,
  toppings: fromToppingsReducer.reducer
};

// selectors
export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
); // referencja do getPizzaState (w products module for feature)


