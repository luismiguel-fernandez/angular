import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  @Input()
  autor = 'Sergio';

  constructor() {}

  ngOnInit(): void {}
}
