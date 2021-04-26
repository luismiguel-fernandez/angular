import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IMBD } from 'src/app/imbd';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css'],
})
export class FavoritoComponent implements OnInit {
  @Input()
  public imbd: IMBD;
  constructor() {}

  ngOnInit(): void {}
}
