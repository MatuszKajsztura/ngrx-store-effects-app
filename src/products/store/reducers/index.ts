import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import * as fromPizzasReducer from "./pizzas.reducers";

export interface ProductsState {
  pizzas: fromPizzasReducer.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzasReducer.reducer
};

// selectors
export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
); // referencja do products w state (w products module for feature)

// pizza state selectors
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getAllPizzas = createSelector(
  getPizzaState,
  fromPizzasReducer.getPizzas
);

export const getAllPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzasReducer.getPizzasLoaded
);

export const getAllPizzasLoading = createSelector(
  getPizzaState,
  fromPizzasReducer.getPizzasLoading
);
