import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avg-ranking',
  templateUrl: './avg-ranking.component.html',
  styleUrls: ['./avg-ranking.component.sass']
})
export class AvgRankingComponent implements OnInit {

  @Input() avgRanking: number;

  constructor() { }

  ngOnInit(): void {
  }

}
