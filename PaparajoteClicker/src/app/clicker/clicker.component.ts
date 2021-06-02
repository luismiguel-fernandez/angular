import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {

  constructor(private game:GameService) { }

  ngOnInit(): void {
  }

  addClick(){
    this.game.addClick()
  }

}
