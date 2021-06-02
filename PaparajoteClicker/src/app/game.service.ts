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
      number: 0,
      price: 15
    },
    {
      name: "Grandma",
      perSecond: 1,
      number: 0,
      price: 100
    },
    {
      name: "Farm",
      perSecond: 10,
      number: 0,
      price: 1100
    }
  ]

  constructor() {
  }

  public addClick() {
    this.cookies = Math.round((this.cookies + this.cookiesPerClick) * 10) / 10
  }
  public addCPStoCookies() {
    this.cookies = Math.round((this.cookies + this.cookiesPerSecond) * 10) / 10
  }
  public buyBuilding(typeOfBuilding: number) {
    //if (enough cookies to buy)
    if (this.cookies >= this.buildings[typeOfBuilding].price) {
      //incrementar el número de ese building comprado
      this.buildings[typeOfBuilding].number++
      //recalculo mi CpS ahora que he comprado algo nuevo
      this.recalculeCookiesPerSecond()
      //pagar la compra: restar de mis cookies el precio de lo que he comprado
      this.cookies -= this.buildings[typeOfBuilding].price
      //incrementar un 15% el precio de ese building
      this.buildings[typeOfBuilding].price = Math.ceil(this.buildings[typeOfBuilding].price * 1.15)
    }
  }
  
  public getCookies(): number {
    return this.cookies
  }
  public getCookiesPerSecond(): number {
    return this.cookiesPerSecond
  }
  
  public getNumberOfBuilding(typeOfBuilding: number) {
    return this.buildings[typeOfBuilding].number
  }
  public getPriceOfBuilding(typeOfBuilding: number) {
    return this.buildings[typeOfBuilding].price
  }

  public printBuildings(){
    this.buildings.forEach(b => {
      console.log(`${b.name}: ${b.number}`)
    })
  }

  private recalculeCookiesPerSecond() {
    let cPS: number = 0
    this.buildings.forEach(building => {
      cPS += building.number * building.perSecond
    })
    this.cookiesPerSecond = Math.round((cPS) * 10) / 10
    console.log(this.cookiesPerSecond)
  }

}
