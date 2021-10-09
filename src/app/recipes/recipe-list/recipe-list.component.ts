import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // @Output()
  // recipeWasSelected=new EventEmitter<Recipe>();
   recipes!: Recipe[];
   //= [
  //   new Recipe('Verbs', 'present tenses', 'https://firebasestorage.googleapis.com/v0/b/english-grammar-92af9.appspot.com/o/successa.jpg?alt=media&token=1b11489c-1ddc-4fa4-9a61-6e988335c770'),
  //   new Recipe('Verbs II', 'past tenses', 'https://firebasestorage.googleapis.com/v0/b/english-grammar-92af9.appspot.com/o/successa.jpg?alt=media&token=1b11489c-1ddc-4fa4-9a61-6e988335c770')
  // ];
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

}
