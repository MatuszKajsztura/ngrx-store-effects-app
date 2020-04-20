import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import * as fromStore from '../store';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { tap, filter, take, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { getPizzasEntities } from '../store';

@Injectable()
export class PizzaExistGuard implements CanActivate {

  constructor(
    private store: Store<fromStore.ProductsState>
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = +route.params.pizzaId;
        return this.hasPizza(id)
      })
    )
  }

  hasPizza(id: number): Observable<boolean> {
    return this.store.select(getPizzasEntities).pipe(
      map((entities) => !!entities[id])
    )
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getAllPizzasLoaded).pipe(
      tap(loaded => {
        if(!loaded) {
          this.store.dispatch(new fromStore.LoadPizzas());
        }
      }),
      filter(loaded => loaded),
      take(1)
    )
  }
}
