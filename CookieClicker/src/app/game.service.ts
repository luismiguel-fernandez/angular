import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private cookies: number = 0
  private cookiesPerSecond: number = 0
  private cookiesPerClick: number = 1

  private buildings = [
    {
      name: "Cursor",
      perSecond: 0.1,
      number: 0
    },
    {
      name: "Grandma",
      perSecond: 1,
      number: 0
    },
    {
      name: "Farm",
      perSecond: 10,
      number: 0
    }
  ]

  constructor() { }

  public addClick() {
    this.cookies += this.cookiesPerClick
  }
  public buyBuilding(typeOfBuilding: number) {
    //if (enough cookies to buy)
    this.buildings[typeOfBuilding].number++
    this.recalculeCookiesPerSecond()
  }
  
  public getCookies(): number {
    return this.cookies
  }
  public getCookiesPerSecond(): number {
    return this.cookiesPerSecond
  }
  
  private recalculeCookiesPerSecond() {
    let cPS: number = 0
    this.buildings.forEach(building => {
      cPS += building.number * building.perSecond
    })
    this.cookiesPerSecond = cPS
    console.log(this.cookiesPerSecond)
  }

}
