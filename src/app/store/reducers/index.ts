import * as fromRouter from '@ngrx/router-store'

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import { Params } from '@angular/router/src/shared';

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
