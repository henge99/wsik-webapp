import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './_pages/entry/entry.component';
import { FoodComponent } from './_pages/food/food.component';
import { FormEntryComponent } from './_pages/form-entry/form-entry.component';
import { FormFoodComponent } from './_pages/form-food/form-food.component';
import { HomeComponent } from './_pages/home/home.component';
import { ListFoodsComponent } from './_pages/list-foods/list-foods.component';
import { ListMealsComponent } from './_pages/list-meals/list-meals.component';

const routes: Routes = [
  { path: 'list', component: ListMealsComponent },
  { path: 'foods', component: ListFoodsComponent },

  { path: 'foods/view/:id', component: FoodComponent },
  { path: 'foods/add', component: FormFoodComponent },
  { path: 'foods/:id', redirectTo: 'foods/view/:id', pathMatch: 'full'},

  { path: 'entry/view/:id', component: EntryComponent },
  { path: 'entry/add', component: FormEntryComponent },
  { path: 'entry/:id', redirectTo: 'entry/view/:id', pathMatch: 'full'},

  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }