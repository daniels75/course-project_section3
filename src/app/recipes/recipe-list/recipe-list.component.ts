import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[]= [
    new Recipe('Recipe1', 'Desc1',
      'https://www.wholesomeyum.com/wp-content/uploads/2016/08/wholesomeyum_taco-salad-2.jpg'),
    new Recipe('Recipe2', 'Desc2',
      'https://img.bestrecipes.com.au/B05gGuy3/w643-h428-cfill-q90/br/2017/05/super-easy-pizza-dough-recipe-520771-1.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
