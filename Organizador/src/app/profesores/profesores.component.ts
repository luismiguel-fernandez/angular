import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  profesores = [ "Luismi" , "Fernando"]

  constructor() { }

  ngOnInit(): void {
  }

}
