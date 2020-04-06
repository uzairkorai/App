import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe',
            'this is a simply a test',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdEJCGuiWhJZPkqISCfLgl9902l0lWnLRwx9OFnfrz-s5I82hAog&s',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Another test recipe',
            'this is a simply a test',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdEJCGuiWhJZPkqISCfLgl9902l0lWnLRwx9OFnfrz-s5I82hAog&s',
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
}