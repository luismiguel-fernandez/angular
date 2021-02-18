import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private url = 'http://my-json-server.typicode.com/luismiguel-fernandez/angular/'
  
  constructor(private http: HttpClient) { }
  
  getCars() {
    return this.http.get(this.url + "coches")
  }

  getMakers() {
    return this.http.get(this.url + "fabricantes")
  }

  getTechs() {
    return this.http.get(this.url + "tecnologias")
  }

  getCar(id: number | string) {
    return this.http.get(this.url + "coches/" + id)
  }
  /*
  getCars() {
    return [
      {"id":"1","text":null,"nombre":"A3 Sportback e-tron","imagen":"img\/Audi_A3_Sportback_e-tron.jpg","precio":"38750","fabricante":"1","tecnologia":"3"},
      {"id":"2","text":null,"nombre":"Q7 e-tron quattro","imagen":"img\/Audi_Q7_e-tron_quattro.jpg","precio":"83970","fabricante":"1","tecnologia":"3"},
      {"id":"3","text":null,"nombre":"i3","imagen":"img\/BMW-i3-60Ah.jpg","precio":"35500","fabricante":"2","tecnologia":"1"},
      {"id":"4","text":null,"nombre":"Serie 2 iPerformance","imagen":"img\/BMW_225xe_iPerformance.jpg","precio":"39500","fabricante":"2","tecnologia":"3"},
      {"id":"5","text":null,"nombre":"Serie 7 iPerformance","imagen":"img\/BMW_740e_iPerformance.jpg","precio":"102500","fabricante":"2","tecnologia":"3"},
      {"id":"6","text":null,"nombre":"C-Zero","imagen":"img\/Citroen_C-ZERO.jpg","precio":"26190","fabricante":"3","tecnologia":"1"},
      {"id":"7","text":null,"nombre":"Berlingo Electric","imagen":"img\/Citroen_Berlingo.jpg","precio":"24900","fabricante":"3","tecnologia":"1"},
      {"id":"8","text":null,"nombre":"Mondeo HEV","imagen":"img\/Ford_MondeoHEV.jpg","precio":"34500","fabricante":"4","tecnologia":"2"},
      {"id":"9","text":null,"nombre":"IONIQ","imagen":"img\/Hyundai_IONIQ_Hybrid.jpg","precio":"21375","fabricante":"6","tecnologia":"2"},
      {"id":"10","text":null,"nombre":"IONIQ","imagen":"img\/Hyundai_IONIQ_Electrico.jpg","precio":"29725","fabricante":"6","tecnologia":"1"},
      {"id":"11","text":null,"nombre":"IONIQ PHEV","imagen":"img\/Hyundai_IONIQ_PHEV.jpg","precio":"27975","fabricante":"6","tecnologia":"3"},
      {"id":"12","text":null,"nombre":"i-Pace","imagen":"img\/Jaguar-i-Pace.jpg","precio":"79100","fabricante":"7","tecnologia":"1"},
      {"id":"13","text":null,"nombre":"Niro","imagen":"img\/Kia_Niro.jpg","precio":"25400","fabricante":"8","tecnologia":"2"},
      {"id":"14","text":null,"nombre":"Niro PHEV","imagen":"img\/Kia_NiroPHEV.jpg","precio":"29070","fabricante":"8","tecnologia":"3"},
      {"id":"15","text":null,"nombre":"Soul EV","imagen":"img\/Kia_SoulEV.jpg","precio":"32840","fabricante":"8","tecnologia":"1"},
      {"id":"16","text":null,"nombre":"Optima PHEV","imagen":"img\/Kia_OptimaPHEV.jpg","precio":"45750","fabricante":"8","tecnologia":"3"},
      {"id":"17","text":null,"nombre":"CT","imagen":"img\/Lexus_CT.jpg","precio":"22900","fabricante":"9","tecnologia":"2"},
      {"id":"18","text":null,"nombre":"IS","imagen":"img\/Lexus_IS.jpg","precio":"35900","fabricante":"9","tecnologia":"2"},
      {"id":"19","text":null,"nombre":"GS","imagen":"img\/Lexus_GS.jpg","precio":"45900","fabricante":"9","tecnologia":"2"},
      {"id":"20","text":null,"nombre":"LS","imagen":"img\/Lexus_LS.jpg","precio":"121500","fabricante":"9","tecnologia":"2"},
      {"id":"21","text":null,"nombre":"NX","imagen":"img\/Lexus_NX.jpg","precio":"39750","fabricante":"9","tecnologia":"2"},
      {"id":"22","text":null,"nombre":"RX","imagen":"img\/Lexus_RX.jpg","precio":"68400","fabricante":"9","tecnologia":"2"},
      {"id":"23","text":null,"nombre":"Clase C","imagen":"img\/Mercedes-C.jpg","precio":"50225","fabricante":"10","tecnologia":"3"},
      {"id":"24","text":null,"nombre":"Clase E","imagen":"img\/Mercedes-E.jpg","precio":"64800","fabricante":"10","tecnologia":"3"},
      {"id":"25","text":null,"nombre":"GLC","imagen":"img\/Mercedes-GLC.jpg","precio":"55850","fabricante":"10","tecnologia":"3"},
      {"id":"26","text":null,"nombre":"Clase S","imagen":"img\/Mercedes-S.jpg","precio":"114325","fabricante":"10","tecnologia":"3"},
      {"id":"27","text":null,"nombre":"i-MiEV","imagen":"img\/Mitsubishi_i-MIEV.jpg","precio":"24400","fabricante":"11","tecnologia":"1"},
      {"id":"28","text":null,"nombre":"Outlander PHEV","imagen":"img\/Mitsubishi_Outlander.jpg","precio":"47200","fabricante":"11","tecnologia":"3"},
      {"id":"29","text":null,"nombre":"LEAF","imagen":"img\/Nissan_LEAF_24Ah.jpg","precio":"29235","fabricante":"12","tecnologia":"1"},
      {"id":"30","text":null,"nombre":"e-NV200","imagen":"img\/Nissan_E-NV200.jpg","precio":"25342","fabricante":"12","tecnologia":"1"},
      {"id":"31","text":null,"nombre":"iOn","imagen":"img\/Peugeot_iOn.jpg","precio":"26190","fabricante":"13","tecnologia":"1"},
      {"id":"32","text":null,"nombre":"508","imagen":"img\/Peugeot_508.jpg","precio":"44880","fabricante":"13","tecnologia":"2"},
      {"id":"33","text":null,"nombre":"Cayenne S E-Hybrid","imagen":"img\/Porsche_Cayenne_S.jpg","precio":"89293","fabricante":"14","tecnologia":"3"},
      {"id":"34","text":null,"nombre":"Twizy","imagen":"img\/Renault_Twizy.jpg","precio":"7220","fabricante":"15","tecnologia":"1"},
      {"id":"35","text":null,"nombre":"ZOE","imagen":"img\/Renault_ZOE.jpg","precio":"21625","fabricante":"15","tecnologia":"1"},
      {"id":"36","text":null,"nombre":"Kangoo Z.E.","imagen":"img\/Renault_Kangoo_ZE.jpg","precio":"24800","fabricante":"15","tecnologia":"1"},
      {"id":"37","text":null,"nombre":"Baleno","imagen":"img\/Suzuki_Baleno.jpg","precio":"17225","fabricante":"16","tecnologia":"2"},
      {"id":"38","text":null,"nombre":"Model S","imagen":"img\/Tesla_ModelS.jpg","precio":"80100","fabricante":"17","tecnologia":"1"},
      {"id":"39","text":null,"nombre":"Model X","imagen":"img\/Tesla_ModelX.jpg","precio":"103100","fabricante":"17","tecnologia":"1"},
      {"id":"40","text":null,"nombre":"Model 3","imagen":"img\/Tesla_Model3.jpg","precio":"45000","fabricante":"17","tecnologia":"1"},
      {"id":"41","text":null,"nombre":"Auris","imagen":"img\/Toyota_Auris.jpg","precio":"22020","fabricante":"18","tecnologia":"2"},
      {"id":"42","text":null,"nombre":"Auris Touring Sports","imagen":"img\/Toyota_Auris_Touring.jpg","precio":"23020","fabricante":"18","tecnologia":"2"},
      {"id":"43","text":null,"nombre":"Prius","imagen":"img\/Toyota_Prius.jpg","precio":"32250","fabricante":"18","tecnologia":"2"},
      {"id":"44","text":null,"nombre":"Prius+","imagen":"img\/Toyota_Prius+.jpg","precio":"31200","fabricante":"18","tecnologia":"2"},
      {"id":"45","text":null,"nombre":"RAV 4","imagen":"img\/Toyota_RAV4.jpg","precio":"31950","fabricante":"18","tecnologia":"2"},
      {"id":"46","text":null,"nombre":"Yaris","imagen":"img\/Toyota_Yaris.jpg","precio":"18100","fabricante":"18","tecnologia":"2"},
      {"id":"47","text":null,"nombre":"C-HR","imagen":"img\/Toyota_C-HR.jpg","precio":"31900","fabricante":"18","tecnologia":"2"},
      {"id":"49","text":null,"nombre":"S90 T8 Twin Engine","imagen":"img\/Volvo_S90_TS_T8_Twin.jpg","precio":"72150","fabricante":"19","tecnologia":"3"},
      {"id":"50","text":null,"nombre":"e-Up!","imagen":"img\/VW_e-Up.jpg","precio":"27720","fabricante":"20","tecnologia":"1"},
      {"id":"51","text":null,"nombre":"e-Golf","imagen":"img\/VW_e-Golf.jpg","precio":"36850","fabricante":"20","tecnologia":"1"},
      {"id":"52","text":null,"nombre":"Golf GTE","imagen":"img\/VW_Golf_GTE.jpg","precio":"40090","fabricante":"20","tecnologia":"3"}
    ]
  }
  */
}
