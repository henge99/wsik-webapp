import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/_interface/food';

@Component({
  selector: 'app-template-food',
  templateUrl: './template-food.component.html',
  styleUrls: ['./template-food.component.sass']
})
export class TemplateFoodComponent implements OnInit {

  @Input() food: Food;

  constructor() { }

  ngOnInit(): void {
  }

}
