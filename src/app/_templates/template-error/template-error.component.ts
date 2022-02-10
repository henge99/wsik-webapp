import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-error',
  templateUrl: './template-error.component.html',
  styleUrls: ['./template-error.component.sass']
})
export class TemplateErrorComponent implements OnInit {

  @Input() errorMsg: String;

  constructor() { }

  ngOnInit(): void {
  }

}
