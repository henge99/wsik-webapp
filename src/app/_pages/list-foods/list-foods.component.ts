import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/_interface/food';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-foods',
  templateUrl: './list-foods.component.html',
  styleUrls: ['./list-foods.component.sass']
})
export class ListFoodsComponent implements OnInit {

  public foods: Food[] = [];
  public errorMsg: String;

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
    this.client.get<Food[]>('http://henrik.geers.it:8080/api/food?orderBy=food&order=asc').subscribe(data => {
      this.foods = data;
    }, (error) => {
      this.errorMsg = 'Keine Verbindung zum Server möglich...';
    });
  }

}
