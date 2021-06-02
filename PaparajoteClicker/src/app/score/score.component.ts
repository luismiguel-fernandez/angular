import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  private reloj

  constructor(private game:GameService) {
    this.reloj = setInterval(this.oneSecond,1000,game)
  }

  ngOnInit(): void {
  }

  getCookies() {
    return this.game.getCookies()
  }
  getCookiesPerSecond() {
    return this.game.getCookiesPerSecond()
  }
  private oneSecond(game) {
    game.addCPStoCookies()
    console.log(`Cookies: ${game.getCookies()} || CPS: ${game.getCookiesPerSecond()}`)
    //game.printBuildings()
  }
}
