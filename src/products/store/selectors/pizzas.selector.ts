import { createSelector } from "@ngrx/store";
import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzasReducer from '../reducers/pizzas.reducers';
import * as fromToppingsSelector from './toppings.selector';
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

  // wizualizacja pizzy (użytkownik jeszcze jej nie zapisał, więc to nie to samo co pizza)
  export const getVisualizedPizza = createSelector(
    getSelectedPizza,
    fromToppingsSelector.getToppingsEntities,
    fromToppingsSelector.getSelectedToppings,
    (pizza, toppingsEntities, selectedToppings): Pizza => {
      const toppings = selectedToppings.map((toppingId) => toppingsEntities[toppingId]);
      return {
        ...pizza,
        toppings
      }
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