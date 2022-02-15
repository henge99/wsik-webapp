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
    rating: 0,
    date: new Date(Date.now())
  };
  public errorMsg: String;

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
    this.getFoods('');
    this.client.get<Time[]>('http://henrik.geers.it:8080/api/time?orderBy=time&order=asc').subscribe(data => {
      this.times = data;
    }, (error) => {
      this.errorMsg = 'Keine Verbindung zum Server möglich...';
    });
    this.client.get<Type[]>('http://henrik.geers.it:8080/api/type?orderBy=type&order=asc').subscribe(data => {
      this.types = data;
    }, (error) => {
      this.errorMsg = 'Keine Verbindung zum Server möglich...';
    });
    this.onBtnSetToday();
  }

  private getFoods(foodSearch: string) {
    let filterFoodSearch = '';
    if (foodSearch) {
      filterFoodSearch = `&search=${foodSearch}`;
    }
    this.client.get<Food[]>(`http://henrik.geers.it:8080/api/food?orderBy=food&order=asc${filterFoodSearch}`).subscribe(data => {
      this.foods = data;
    }, (error) => {
      this.errorMsg = 'Keine Verbindung zum Server möglich...';
    });
  }

  public onRatingChange(event: any) {
    this.newMealValues.rating = event.target.value;
  }

  public onDateSelected(event: any) {
    this.newMealValues.date = new Date(event.target.value);
  }

  public onBtnSetToday() {
    let today = new Date(Date.now());
    today = new Date(Date.now() + today.getTimezoneOffset());
    this.newMealValues.date = today;
  }

  public onSearchFood(event: any) {
    let foodSearch = event.target.value;
    this.getFoods(foodSearch);
  }

  public onTimeInput(event: any) {
    this.newMealValues.timeUUID = event.target.value;
  }

  public onBtnSubmitClick(formData: any) {
    if (formData.form.status === 'INVALID') {
      alert('Es sind noch nicht alle notwendigen Felder passend ausgefüllt');
    } else {
      this.client.post<Food[]>(`http://henrik.geers.it:8080/api/meals`, {
        mealid: formData.value.foodUUID,
        typeid: formData.value.typeUUID,
        timeid: formData.value.timeUUID,
        rating: formData.value.rating,
        date: formData.value.date,
      }).subscribe(data => {
        alert('Eintrag wurde erstellt');
      }, (error) => {
        this.errorMsg = 'Keine Verbindung zum Server möglich...';
      });
    }
    console.dir(formData.value)
  }

}
