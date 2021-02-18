import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-ev-details',
  templateUrl: './ev-details.component.html',
  styleUrls: ['./ev-details.component.css']
})
export class EvDetailsComponent implements OnInit {
  
  ev$: Observable<any>
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CarsService ) { }

  ngOnInit(): void {
    this.ev$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCar(params.get('id')))
    );
  }

  gotoCatalogo() {
    this.router.navigate(['/catalogo']);
  }

}
