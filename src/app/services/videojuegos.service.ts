import { Injectable } from '@angular/core';

@Injectable()
export class VideojuegosService {
  private videojuegos: Videojuego[] = [
    {
      nombre:'fornite',
      descripcion: 'Fortnite es un videojuego del año 2017' +
        ' desarrollado por la empresa Epic Games,' +
        ' lanzado como diferentes paquetes de software que presentan diferentes' +
        ' modos de juego, pero comparten el mismo motor de juego y ' +
        'mecánicas. 1. Fortnite Battle Royale',
      img:'assets/fornite.jpg',
      lanzamiento: '2017',
      consola : 'ps4'

    },
    {    nombre:'for honor',
      descripcion: 'For Honor es un videojuego de acción en tercera persona que destacó por su sistema de combate tridireccional.' +
        ' Ha sido desarrollado por Ubisoft Montreal y distribuido por Ubisoft para las plataformas Microsoft Windows,' +
        ' PlayStation 4 y Xbox One. Fue anunciado oficialmente en el E3 de 2015 y salió a la venta el 14 de febrero de 2017. ' +
        'El juego se centra en el combate medieval y consta de cuatro facciones a las cuales los jugadores podrán escoger entre' +
        'caballero, samurai, vikingo o wu',
      lanzamiento: '2017',
      img:'assets/forhonor.jpg',
      consola : 'xbox'},
    {nombre:'Marvel Spider-Man',
      descripcion: 'Marvel Spider-Man es un videojuego de acción y aventura basado en el popular superhéroe hómonimo de la' +
        ' editorial Marvel Comics. Fue desarrollado por Insomniac Games y publicado por Sony Interactive Entertainment en ' +
        'exclusiva para la consola PlayStation 4.',
      img:'assets/spider.png',
      lanzamiento: '2018',
      consola : 'ps4'},
    {nombre:'Nba2k19',
      descripcion: 'NBA 2K19 es un videojuego de simulación de baloncesto desarrollado por Visual Concepts y publicado por 2K Sports' +
        '. Es la 19ª entrega de la franquicia NBA 2K y el sucesor de la NBA 2K18. Está programado para ser lanzado en septiembre' +
        ' de 2018 para Microsoft Windows, Nintendo Switch, PlayStation 4 y Xbox One.',
      img:'assets/nba.jpg',
      lanzamiento: '2018',
      consola : 'xbox'

    },
    {nombre:'Call of Dutty WWII',
      descripcion: 'Call of Duty: WWII es un videojuego de disparos en primera persona desarrollado por Sledgehammer Games,' +
        ' distribuido por Activision, perteneciente a la franquicia Call of Duty y es la décimo cuarta entrega de la saga.',
      img:'assets/cod.jpg',
      lanzamiento: '2017',
      consola : 'ps4'},
    {nombre:'Forza Horizon 4',
      descripcion: 'Forza Horizon 4 es un videojuego de carreras de mundo abierto, jugable en línea, desarrollado por ' +
        'Playground Games para Xbox One y Windows 10. Fue revelado en el E3 2018 y su lanzamiento se produjo el 2 de octubre de 2018.',
      img:'assets/forza.jpg',
      lanzamiento: '2018',
      consola : 'xbox'},
    {nombre:'Crash Bandicoot N. Sane',
      descripcion: 'Crash Bandicoot N. Sane Trilogy es un videojuego de plataformas desarrollado por Vicarious ' +
        'Visions y publicado por Activision como una exclusiva temporal para la plataforma PlayStation 4.',
      img:'assets/crash.jpg',
      lanzamiento: '2017',
      consola : 'ps4'
    },
    {
      nombre:'Assassins Creed Valhalla',
      descripcion: 'Assassins Creed Valhalla es un videojuego desarrollado por Ubisoft Montreal y publicado por Ubisoft.' +
        ' Es el decimosegundo en importancia y el vigesimosegundo lanzado dentro de la saga de Assassin Creed,' +
        ' y sucesor al juego del 2018 Assassins Creed Odyssey',
      img:'assets/assa.jpg',
      lanzamiento: '2018',
      consola : 'xbox'
    },
    {   nombre:'Horizon Zero Dawn',
      descripcion: 'Horizon Zero Dawn es un videojuego de acción, aventura y de mundo abierto desarrollado por Guerrilla Games' +
        ' y distribuido por Sony Interactive Entertainment para PlayStation 4. ' +
        'Es la primera propiedad intelectual de Guerrilla Games desde la serie Killzone en 2004 y se anunció por ' +
        'primera vez en el E3 2015',
      img:'assets/hzd.jpg',
      lanzamiento: '2017',
      consola : 'ps4'},
    {  nombre:'Control ',
      descripcion: 'Control es un videojuego de acción-aventura y disparos en tercera persona desarrollado por Remedy Entertainment ' +
        'y distribuido por 505 Games. Fue lanzado el 27 de agosto de 2019 en las plataformas Stadia, Microsoft Windows, PlayStation 4,' +
        ' Xbox One y Nintendo Switch.',
      img:'assets/control.jpg',
      lanzamiento: '2015',
      consola : 'xbox'
    },
  ];

  constructor() {
    console.log('Servicio listo para usarse.');
  }

  getVideojuegos(): Videojuego[] {
    return this.videojuegos;
  }

  getVideojuego(idx: number) {
    return this.videojuegos[idx];
  }

  buscarVideojuegos(termino: string): Videojuego[] {
    let videojuegosArr: Videojuego[] = [];
    termino = termino.toLowerCase();
    for (let videojuego of this.videojuegos) {
      let nombre = videojuego.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        videojuegosArr.push(videojuego);
      }
    }
    return videojuegosArr;
  }
}

export interface Videojuego {
  nombre: string;
  descripcion: string;
  img: string;
  lanzamiento: string;
  consola: string;
}
