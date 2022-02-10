import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../../_interface/meal';

@Component({
  selector: 'app-template-meal',
  templateUrl: './template-meal.component.html',
  styleUrls: ['./template-meal.component.sass']
})
export class TemplateMealComponent implements OnInit {

  @Input() meal: Meal;
  public clicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public clickMeal(event?:any) {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }

}
