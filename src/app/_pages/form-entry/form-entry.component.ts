import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from 'src/app/_interface/food';

@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.sass']
})
export class FormEntryComponent implements OnInit {

  public foods: Food[] = [];
  public newMealValues = {
    foodUUID: "",
    rating: 0,
    date: new Date(Date.now())
  };
  public errorMsg: String;

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
    this.client.get<Food[]>('http://henrik.geers.it:8080/api/food?orderBy=food&order=asc').subscribe(data => {
      this.foods = data;
      console.dir(data);
    }, (error) => {
      this.errorMsg = 'Keine Verbindung zum Server möglich...';
    });
  }

  public onRatingClick(rating: number) {
    this.newMealValues.rating = rating;
    console.dir(this.newMealValues.date);
  }

  public onDateSelected(event: any) {
    console.dir(event.target.value);
    this.newMealValues.date = new Date(event.target.value);
  }

  public onBtnSetToday() {
    let today = new Date(Date.now());
    today = new Date(Date.now() + today.getTimezoneOffset());
    this.newMealValues.date = today;
    console.dir(this.newMealValues.date);
  }

}
