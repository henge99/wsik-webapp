import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Meal } from 'src/app/_interface/meal';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.sass']
})
export class EntryComponent implements OnInit, OnDestroy  {

  public mealIdParam: string;
  public meal: Meal;
  public errorMsg: String;
  private sub: any;

  constructor(private client: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.mealIdParam = params['id']; 
        this.client.get<Meal>(`http://henrik.geers.it:8080/api/meals/${this.mealIdParam}`).subscribe(data => {
          this.meal = data;
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
