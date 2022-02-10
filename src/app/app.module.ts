import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateMealComponent } from './_templates/template-meal/template-meal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateHeaderComponent } from './_templates/template-header/template-header.component';
import { TemplateFooterComponent } from './_templates/template-footer/template-footer.component';
import { ListMealsComponent } from './_pages/list-meals/list-meals.component';
import { TemplateErrorComponent } from './_templates/template-error/template-error.component';
import { FormAddEntryComponent } from './_pages/form-add-entry/form-add-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateMealComponent,
    TemplateHeaderComponent,
    TemplateFooterComponent,
    ListMealsComponent,
    TemplateErrorComponent,
    FormAddEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
