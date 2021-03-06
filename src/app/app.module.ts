import { NgModule, LOCALE_ID } from '@angular/core';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateMealComponent } from './_templates/template-meal/template-meal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateHeaderComponent } from './_templates/template-header/template-header.component';
import { TemplateFooterComponent } from './_templates/template-footer/template-footer.component';
import { ListMealsComponent } from './_pages/list-meals/list-meals.component';
import { TemplateErrorComponent } from './_templates/template-error/template-error.component';
import { EntryComponent } from './_pages/entry/entry.component';
import { LoadingComponent } from './_widgets/loading/loading.component';
import { FormEntryComponent } from './_pages/form-entry/form-entry.component';
import { HomeComponent } from './_pages/home/home.component';
import { ListFoodsComponent } from './_pages/list-foods/list-foods.component';
import { TemplateFoodComponent } from './_templates/template-food/template-food.component';
import { FormFoodComponent } from './_pages/form-food/form-food.component';
import { FoodComponent } from './_pages/food/food.component';
import { CrudActionsComponent } from './_widgets/crud-actions/crud-actions.component';
import { AvgRankingComponent } from './_widgets/avg-ranking/avg-ranking.component';

import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDe, localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    TemplateMealComponent,
    TemplateHeaderComponent,
    TemplateFooterComponent,
    ListMealsComponent,
    TemplateErrorComponent,
    EntryComponent,
    LoadingComponent,
    FormEntryComponent,
    HomeComponent,
    ListFoodsComponent,
    TemplateFoodComponent,
    FormFoodComponent,
    FoodComponent,
    CrudActionsComponent,
    AvgRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
