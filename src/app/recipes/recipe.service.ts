import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
            'A super-testy Schnitzel - just awesome!',
            'https://media.istockphoto.com/photos/tasty-schnitzel-with-cucumber-salad-picture-id884699050?k=6&m=884699050&s=170667a&w=0&h=E6ylrCKBZlcN_lBkpE5sVuNiOAXwIlf4s_yK6nnOgz8=',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdlJqHTiaI7ha1gyFuBK5dBTyixn84wPZ7-plDkGwR_rfiwMkU&usqp=CAU',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
        new Recipe('Good test recipe',
            'this is a simply a test',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdEJCGuiWhJZPkqISCfLgl9902l0lWnLRwx9OFnfrz-s5I82hAog&s',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
       this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}