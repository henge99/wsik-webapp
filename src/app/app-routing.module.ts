import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryAddComponent } from './_pages/entry-add/entry-add.component';
import { EntryComponent } from './_pages/entry/entry.component';
import { ListMealsComponent } from './_pages/list-meals/list-meals.component';

const routes: Routes = [
  { path: '', component: ListMealsComponent },
  { path: 'entry/view/:id', component: EntryComponent },
  { path: 'entry/add', component: EntryAddComponent },
  { path: 'entry/:id', redirectTo: 'entry/view/:id', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
