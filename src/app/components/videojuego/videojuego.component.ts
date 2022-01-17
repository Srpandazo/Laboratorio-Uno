import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css'],
})
export class VideojuegoComponent {
  videojuego: any = {};
  constructor(
    private _videojuegoService: VideojuegosService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.videojuego = this._videojuegoService.getVideojuego(params['id']);
    });
  }
}
