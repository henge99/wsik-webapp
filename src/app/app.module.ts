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
import { EntryComponent } from './_pages/entry/entry.component';
import { EntryAddComponent } from './_pages/entry-add/entry-add.component';
import { LoadingComponent } from './_widgets/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateMealComponent,
    TemplateHeaderComponent,
    TemplateFooterComponent,
    ListMealsComponent,
    TemplateErrorComponent,
    EntryComponent,
    EntryAddComponent,
    LoadingComponent
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
