import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/_interface/meal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-meals',
  templateUrl: './list-meals.component.html',
  styleUrls: ['./list-meals.component.sass']
})
export class ListMealsComponent implements OnInit {

  public meals: Meal[] = [];
  public errorMsg: String;

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
    this.client.get<Meal[]>('http://henrik.geers.it:8080/api/meals?orderBy=date&order=desc').subscribe(data => {
      this.meals = data;
      console.dir(data);
    }, (error) => {
      this.errorMsg = 'Keine Verbindung zum Server möglich...';
    });
  }

}
