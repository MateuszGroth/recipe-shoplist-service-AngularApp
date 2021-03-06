import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id : number;

  constructor(private recipeService : RecipeService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    //this.recipe = this.recipeService.getRecipeById(this.route.snapshot.params['id']);

    this.route.params
      .subscribe(
        (params : Params) =>{
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipeById(this.id);
        }
      );
  }
  onShoppingListClick(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }
  onEdit(){
    // this.router.navigate(['edit'], {relativeTo : this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo : this.route});
  }

}
