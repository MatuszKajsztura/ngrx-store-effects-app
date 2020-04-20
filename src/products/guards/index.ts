export * from './pizzas.guard';
export * from './pizza-exist.guard';
export * from './toppings.guard';

import  { PizzasGuard } from './pizzas.guard';
import  { ToppingsGuard } from './toppings.guard';
import  { PizzaExistGuard } from './pizza-exist.guard';

export const guards = [PizzasGuard, PizzaExistGuard, ToppingsGuard];
