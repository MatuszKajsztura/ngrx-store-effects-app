import { createSelector } from "@ngrx/store";
import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzasReducer from '../reducers/pizzas.reducers';
import { Pizza } from 'src/products/models/pizza.model';

// pizza state selectors
export const getPizzaState = createSelector(
    fromFeature.getProductsState,
    (state: fromFeature.ProductsState) => state.pizzas
  );
  
  export const getPizzasEntities = createSelector(
    getPizzaState,
    fromPizzasReducer.getPizzasEntities
  );
  
  export const getSelectedPizza = createSelector(
    getPizzasEntities,
    fromRoot.getRouterState,
    (entities, router): Pizza => {
      return router.state && entities[router.state.params.pizzaId];
    }
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