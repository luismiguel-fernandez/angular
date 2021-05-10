import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private game: GameService) { }

  ngOnInit(): void {
  }

  buyBuilding(typeOfBuilding: number) {
    this.game.buyBuilding(typeOfBuilding)
  }

  getNumberOfBuilding(typeOfBuilding: number) {
    return this.game.getNumberOfBuilding(typeOfBuilding)
  }
  getPriceOfBuilding(typeOfBuilding: number) {
    return this.game.getPriceOfBuilding(typeOfBuilding)
  }
}

