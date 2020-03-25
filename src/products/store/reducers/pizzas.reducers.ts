import { Pizza } from 'src/products/models/pizza.model';
import * as fromPizzas from '../actions/pizzas.action';

export interface PizzaState {
  entities: any;
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  entities: {},
  loaded: false,
  loading: false
}

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  console.log('reducer')
  switch(action.type){
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      }
    };
    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const data = action.paylaod;
      const entities = data.reduce((entities: {[id: number]: Pizza}, pizza: Pizza) => {
        const entity = {
          [pizza.id]: pizza
        }
        return {...entities, ...entity}
      }, {
        ...state.entities
      })

      console.log(entities)

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      }
    };
    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
  }

  return state; // przy pierwszym zwrocie --> Initial State
}


export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
