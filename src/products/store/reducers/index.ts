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
); // referencja do pgetPizzaStateroducts w state (w products module for feature)

// pizza state selectors
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzasReducer.getPizzasEntities
);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities) => Object.keys(entities).map((id) => {
    return entities[+id];
  })
);

export const getAllPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzasReducer.getPizzasLoaded
);

export const getAllPizzasLoading = createSelector(
  getPizzaState,
  fromPizzasReducer.getPizzasLoading
);
