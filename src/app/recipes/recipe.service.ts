import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{

    constructor(private shoppingListService : ShoppingListService){}

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] =[
        new Recipe('TestRecipe',
         'This is a test',
          'https://i.wpimg.pl/669x0/i.abczdrowie.pl.sds.o2.pl/imageCache/2017/06/12/9030210-ml_74ca-x0y0xx1681yy1117.jpg', [
              new Ingredient('Meat', 1),
              new Ingredient('French Fries', 20),

          ]),
          new Recipe('AnotherTestRecipe',
         'This is a second test',
          'https://i.wpimg.pl/669x0/i.abczdrowie.pl.sds.o2.pl/imageCache/2017/06/12/9030210-ml_74ca-x0y0xx1681yy1117.jpg', [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1),
          ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }
      getRecipeById(id : number){
        return this.recipes[id];
    }
}