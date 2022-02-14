import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from 'src/app/_interface/food';
import { Time } from 'src/app/_interface/time';
import { Type } from 'src/app/_interface/type';

@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.sass']
})
export class FormEntryComponent implements OnInit {

  public foods: Food[] = [];
  public times: Time[] = [];
  public types: Type[] = [];
  public newMealValues = {
    foodUUID: "",
    timeUUID: "",
    rating: 3,
    date: new Date(Date.now())
  };
  public errorMsg: String;

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
    this.getFoods('');
    this.client.get<Time[]>('http://henrik.geers.it:8080/api/time?orderBy=time&order=asc').subscribe(data => {
      this.times = data;
      console.dir(data);
    }, (error) => {
      this.errorMsg = 'Keine Verbindung zum Server möglich...';
    });
    this.client.get<Type[]>('http://henrik.geers.it:8080/api/type?orderBy=type&order=asc').subscribe(data => {
      this.types = data;
      console.dir(data);
    }, (error) => {
      this.errorMsg = 'Keine Verbindung zum Server möglich...';
    });
  }

  private getFoods(foodSearch: string) {
    let filterFoodSearch = '';
    if (foodSearch) {
      filterFoodSearch = `&search=${foodSearch}`;
    }
    this.client.get<Food[]>(`http://henrik.geers.it:8080/api/food?orderBy=food&order=asc${filterFoodSearch}`).subscribe(data => {
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

  public onSearchFood(event: any) {
    let foodSearch = event.target.value;
    this.getFoods(foodSearch);
  }

}
