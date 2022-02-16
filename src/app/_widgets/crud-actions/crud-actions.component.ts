import { Component, OnInit, Input } from '@angular/core';
import { CrudAction } from 'src/app/_interface/crud-action';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-actions',
  templateUrl: './crud-actions.component.html',
  styleUrls: ['./crud-actions.component.sass']
})
export class CrudActionsComponent implements OnInit {

  @Input() actions: CrudAction[];

  constructor(private client: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  public onActionClick(action: CrudAction) {

    if (action.navRoute) {
      this.router.navigate(action.navRoute);
    } else {
      switch (action.httpMethod) {
        case 'delete':
          this.client.delete(`http://henrik.geers.it:8080/api/${action.httpRoute}`).subscribe((data) => {
            if (action.callback) {
              action.callback(data); 
            }
          }, () => {
            //this.errorMsg = 'Keine Verbindung zum Server möglich...';
          });
          break;
        case 'patch':
          this.client.patch(`http://henrik.geers.it:8080/api/${action.httpRoute}`, action.httpBodyData).subscribe(() => {
          }, () => {
            //this.errorMsg = 'Keine Verbindung zum Server möglich...';
          });
          break;
      }
    }

  }

}
