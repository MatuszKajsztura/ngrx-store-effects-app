import { createSelector } from "@ngrx/store";
import * as fromFeature from '../reducers';
import * as fromToppingReducer from '../reducers/toppings.reducers';
import { Topping } from 'src/products/models/topping.model';

// topping state selectors
export const getToppingsState = createSelector(
    fromFeature.getProductsState,
    (state: fromFeature.ProductsState) => state.toppings
);

export const getToppingsEntities = createSelector(
    getToppingsState,
    fromToppingReducer.getToppingsEntities    
);

export const getAllToppings = createSelector(
    getToppingsEntities,
    (entities: { [toppingId: number]: Topping}) => {
        return Object.keys(entities).map((toppingId) => entities[+toppingId]);
    }
);

export const getToppingsLoaded = createSelector(
    getToppingsState,
    fromToppingReducer.getToppingsLoaded
);

export const getToppingsLoading = createSelector(
    getToppingsState,
    fromToppingReducer.getToppingsLoading
);

export const getSelectedToppings = createSelector(
    getToppingsState,
    fromToppingReducer.getSelectedToppings
);