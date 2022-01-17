import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'videojuego/:id', component: VideojuegoComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
