import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Meal } from 'src/app/_interface/meal';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudAction } from 'src/app/_interface/crud-action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.sass']
})
export class EntryComponent implements OnInit, OnDestroy  {

  public mealIdParam: string;
  public meal: Meal;
  public errorMsg: String;
  private sub: Subscription;
  public crudActions: CrudAction[];

  constructor(private client: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.mealIdParam = params['id'];
        this.client.get<Meal>(`http://henrik.geers.it:8080/api/meals/${this.mealIdParam}`).subscribe(data => {
          this.meal = data;
          console.dir(data);
        }, (error) => {
          this.errorMsg = 'Keine Verbindung zum Server möglich...';
        });

        this.crudActions = [
          {
            desc: "Bearbeiten",
            iconPath: "pencil",
            navRoute: ['entry/edit/', this.mealIdParam]
          },
          {
            desc: "Löschen",
            iconPath: "trash",
            color: "red",
            httpRoute: `meals/${this.mealIdParam}`,
            httpMethod: "delete",
            httpBodyData: {},
            callback: () => {
              this.router.navigate(['/list']);
              alert('Der Eintrag wurde gelöscht');
            }
          }
        ];

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
