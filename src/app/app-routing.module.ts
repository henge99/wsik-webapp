import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './_pages/entry/entry.component';
import { FormEntryComponent } from './_pages/form-entry/form-entry.component';
import { HomeComponent } from './_pages/home/home.component';
import { ListMealsComponent } from './_pages/list-meals/list-meals.component';

const routes: Routes = [
  { path: 'list', component: ListMealsComponent },
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
