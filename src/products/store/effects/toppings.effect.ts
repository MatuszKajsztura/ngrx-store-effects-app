import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import {of } from 'rxjs/observable/of';

import * as toppigActions from '../actions/toppings.action';
import * as fromServices from '../../services';

@Injectable()
export class ToppingsEffects {
  constructor(
    private actions$: Actions,
    private toppingsService: fromServices.ToppingsService
  ) {}

  @Effect()
  loadToppings$ = this.actions$.ofType(toppigActions.LOAD_TOPPINGS).pipe(
    switchMap(
        () => {
          return this.toppingsService.getToppings().pipe(
            map(toppings => new toppigActions.LoadToppingsSucces(toppings)),
            catchError(error => of(new toppigActions.LoadToppingsFail(error))) 
          )
        }
    )
  )
}
