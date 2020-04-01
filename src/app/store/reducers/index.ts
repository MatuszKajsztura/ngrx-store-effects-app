import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store'

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";


export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer
}

/* Selectors */

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>(
  "routerReducer"
)

//custom serailizer dla router state'a
export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl>{
  serialize(
    routerState: RouterStateSnapshot
  ): RouterStateUrl {
      const { url } = routerState;
      const { queryParams } = routerState.root;

      // pobieranie routera z angular router do ngrx router state
      let state: ActivatedRouteSnapshot = routerState.root;
      while (state.firstChild) {
        state = state.firstChild;
      }

      const { params } = state;

      // metoda uruchomi się za każdym razem kiedy zmieni się routing/url
       
    return { 
      url, queryParams, params
    }
  }
}