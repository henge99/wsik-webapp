import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from 'src/app/_interface/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.sass']
})
export class FoodComponent implements OnInit {

  public foodIdParam: string;
  public food: Food;
  public errorMsg: String;
  private sub: any;

  constructor(private client: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.foodIdParam = params['id']; 
        this.client.get<Food>(`http://henrik.geers.it:8080/api/food/${this.foodIdParam}`).subscribe(data => {
          this.food = data;
          console.dir(data);
        }, (error) => {
          this.errorMsg = 'Keine Verbindung zum Server möglich...';
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
