import { Topping } from 'src/products/models/topping.model';

import * as fromToppings from '../actions/toppings.action';

export interface ToppingsState {
    entities: { [id: number]: Topping},
    loaded: boolean;
    loading: boolean;
    selectedToppings: number[];
}

export const initialState: ToppingsState = {
    entities: {},
    loaded: false,
    loading: false,
    selectedToppings: []
}

export function reducer(
    state = initialState,
    action: fromToppings.ToppingsAction
) {
    switch(action.type) {
        case fromToppings.VISUALIZE_TOPPINGS: {
            const selectedToppings = action.payload;
            return {
                ...state,
                selectedToppings
            }
        };
        case fromToppings.LOAD_TOPPINGS: {
            return {
                ...state,
                loading: true
            };
        };
        /*
        [{}, {}, {}]
        */        
        case fromToppings.LOAD_TOPPINGS_SUCCESS: {
            const entities = action.payload.reduce((entities: {[id: number]: Topping}, current) => {
                const entity = {
                    [current.id]: current 
                };
                return {
                    ...entities, ...entity 
                }
            },{
                ...state.entities
            })
            console.log(entities,222)
            return {
                ...state,
                entities,
                loaded: true,
                loading: false
            };
        };
        case fromToppings.LOAD_TOPPINGS_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false
            }
        }
    }

    return state;
}

export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoading = (state: ToppingsState) => state.loaded;
export const getToppingsLoaded = (state: ToppingsState) => state.loading;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;