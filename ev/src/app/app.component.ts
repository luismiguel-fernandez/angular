import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

<<<<<<< HEAD
=======
  coches;
  title = 'ev';
  vistaBigCard = true;
  loading = false;
  patron = "";
>>>>>>> 6612e3c9433d5b36ca14c5a48290562d6c89f9be

  constructor() {
  }
  
  ngOnInit() {

<<<<<<< HEAD
  }


=======
  cambiarVista() {
    this.vistaBigCard = !this.vistaBigCard
  }

  filtrarCoches($event) {
    this.patron = $event
  }
>>>>>>> 6612e3c9433d5b36ca14c5a48290562d6c89f9be
}
