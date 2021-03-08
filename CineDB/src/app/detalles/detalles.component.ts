import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BaseDatosCineService } from '../base-datos-cine.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  favorito$: Observable<any>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private basedatos: BaseDatosCineService) { }


  ngOnInit(): void {
    this.favorito$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.basedatos.buscarPorId(params.get('id')))
    );
  }

  gotoFavoritos() {
    this.router.navigate(['/favs']);
  }
}
