import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from 'src/app/_interface/food';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-food',
  templateUrl: './form-food.component.html',
  styleUrls: ['./form-food.component.sass']
})
export class FormFoodComponent implements OnInit {

  public errorMsg: String;
  @ViewChild('formFood') formFood: NgForm;

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
  }

  public onBtnSubmitClick(formData: any) {
    if (formData.form.status === 'INVALID') {
      alert('Es sind noch nicht alle notwendigen Felder passend ausgefüllt');
    } else {
      this.client.post<Food[]>(`http://henrik.geers.it:8080/api/food`, {
        food: formData.value.food
      }).subscribe(data => {
        alert('Eintrag wurde erstellt');
        this.formFood.resetForm();
      }, (error) => {
        this.errorMsg = 'Keine Verbindung zum Server möglich...';
      });
    }
  }

}
