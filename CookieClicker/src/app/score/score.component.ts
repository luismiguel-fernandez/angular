import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private game:GameService) { }

  ngOnInit(): void {
  }

  getCookies() {
    return this.game.getCookies()
  }
  getCookiesPerSecond() {
    return this.game.getCookiesPerSecond()
  }

}
