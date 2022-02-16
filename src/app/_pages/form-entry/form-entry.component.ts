import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from 'src/app/_interface/food';
import { Time } from 'src/app/_interface/time';
import { Type } from 'src/app/_interface/type';
import { NgForm } from '@angular/forms';
import { Meal } from 'src/app/_interface/meal';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Entry } from 'src/app/_interface/entry';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.sass']
})
export class FormEntryComponent implements OnInit, OnDestroy {

  @ViewChild('formEntry') formEntry: NgForm;

  public errorMsg: String;
  public editMode: boolean;
  public entryToEdit: Entry;
  public entryIdParam: String;
  public foods: Food[] = [];
  public times: Time[] = [];
  public types: Type[] = [];
  private sub: Subscription;
  public newMealValues = {
    foodUUID: "",
    timeUUID: "",
    typeUUID: "",
    rating: 0,
    date: new Date(Date.now())
  };

  constructor(private client: HttpClient, private route: ActivatedRoute, private router: Router, public location: Location) { }

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
    
    this.sub = this.route.params.subscribe(params => {
      this.entryIdParam = params['id'];
      this.editMode = Boolean(this.entryIdParam);
      
      if (this.editMode) {
        this.client.get<Entry>(`http://henrik.geers.it:8080/api/entry/${this.entryIdParam}`).subscribe(data => {
          this.entryToEdit = data;
          this.populateForm(this.entryToEdit);
        }, (error) => {
          this.errorMsg = 'Keine Verbindung zum Server möglich...';
        }); 
      }
    });

  }

  private populateForm(entry: Entry) {

    this.formEntry.setValue({
      foodUUID: entry.mealid,
      typeUUID: entry.typeid,
      timeUUID: entry.timeid,
      rating: entry.rating,
      date: entry.date.split('T')[0]
    });

    this.newMealValues.rating = entry.rating;

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
      if (this.editMode) {
        this.client.patch<Entry[]>(`http://henrik.geers.it:8080/api/entry/${this.entryToEdit.uuid}`, {
          mealid: formData.value.foodUUID,
          typeid: formData.value.typeUUID,
          timeid: formData.value.timeUUID,
          rating: formData.value.rating,
          date: formData.value.date
        }).subscribe(data => {
          alert('Eintrag wurde gespeichert');
          this.location.back();
        }, (error) => {
          this.errorMsg = 'Keine Verbindung zum Server möglich...';
        });
      } else {
        this.client.post<Meal[]>(`http://henrik.geers.it:8080/api/meals`, {
          mealid: formData.value.foodUUID,
          typeid: formData.value.typeUUID,
          timeid: formData.value.timeUUID,
          rating: formData.value.rating,
          date: formData.value.date
        }).subscribe(data => {
          alert('Eintrag wurde erstellt');
          this.formEntry.resetForm();
        }, (error) => {
          this.errorMsg = 'Keine Verbindung zum Server möglich...';
        });
      }
    }
  }

  public onBtnCancelClick() {
    this.location.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
