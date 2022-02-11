import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../../_interface/meal';

@Component({
  selector: 'app-template-meal',
  templateUrl: './template-meal.component.html',
  styleUrls: ['./template-meal.component.sass']
})
export class TemplateMealComponent implements OnInit {

  @Input() meal: Meal;

  constructor() { }

  ngOnInit(): void {
  }

}
