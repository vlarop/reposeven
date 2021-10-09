import { EventEmitter, Injectable, Output } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService {

  //  @Output()
  //  recipeSelected=new Subject<Recipe>();

 private recipes: Recipe[] = [
    new Recipe('Verbs', 'present tenses',
    'https://firebasestorage.googleapis.com/v0/b/english-grammar-92af9.appspot.com/o/successa.jpg?alt=media&token=1b11489c-1ddc-4fa4-9a61-6e988335c770',
    [new Ingredient('plum', 5),
    new Ingredient('kiwi', 7)]),
    new Recipe('Verbs II', 'past tenses',
    'https://firebasestorage.googleapis.com/v0/b/english-grammar-92af9.appspot.com/o/successa.jpg?alt=media&token=1b11489c-1ddc-4fa4-9a61-6e988335c770',
    [new Ingredient('carrot', 4),
    new Ingredient('onion', 1)])
  ];

  constructor(private slService: ShoppingListService){

  }

  //poradi receptu
  getRecipe(index: number){
    return this.recipes[index];
  }

  getRecipes(){
    //vrat kopii
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}

