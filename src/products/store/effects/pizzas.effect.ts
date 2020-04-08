import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import {of } from 'rxjs/observable/of';

import * as fromRoot from '../../../app/store';
import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';
import { Pizza } from 'src/products/models/pizza.model';


@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
    .pipe(
      switchMap(() => {
        return this.pizzaService.getPizzas().pipe(
          map(pizzas => new pizzaActions.LoadPizzasSucces(pizzas)),
          catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        )
      })
    )

  @Effect()
  createPizza$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA)
    .pipe(
      map((action: pizzaActions.CreatePizza) => action.payload),
      switchMap((pizza: Pizza) => {
        return this.pizzaService.createPizza(pizza).pipe(
          map(pizza => new pizzaActions.CreatePizzaSuccess(pizza)),
          catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
        )
      })
    )
  
    //odpowiedz - efekt na sukces wyżej
  @Effect()
  createPizzaSucces$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA_SUCCESS)
    .pipe(
      map((action: pizzaActions.CreatePizzaSuccess) => action.payload),
      map((pizza: Pizza) => {
        return new fromRoot.Go({
          path: ['/products', pizza.id]
        })
      }) 
    )


  @Effect()
  updatePizza$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA)
    .pipe(
      map((action: pizzaActions.UpdatePizza) => action.payload),
      switchMap((pizza: Pizza) => {
        return this.pizzaService.updatePizza(pizza).pipe(
          map(pizza => new pizzaActions.UpdatePizzaSuccess(pizza)),
          catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
        )
      })
    )
  
    @Effect()
    removePizza$ = this.actions$.ofType(pizzaActions.REMOVE_PIZZA).pipe(
      map((action: pizzaActions.RemovePizza) => action.payload),
      switchMap((pizzaToRemove) => {
        return this.pizzaService.removePizza(pizzaToRemove).pipe(
          map(pizza => {
            return new pizzaActions.RemovePizzaSuccess(pizzaToRemove)
          }),
          catchError(error => of(new pizzaActions.RemovePizzaFail(error)))
        )
      })
    )

    // efekt na update/remove - go na listę produktów
    @Effect()
    pizzaActionSuccess$ = this.actions$.ofType(
      pizzaActions.UPDATE_PIZZA_SUCCESS,
      pizzaActions.REMOVE_PIZZA_SUCCESS
    )
    .pipe(
      map(() => {
        return new fromRoot.Go({
          path: ['/products']
        })
      })
    )
}
