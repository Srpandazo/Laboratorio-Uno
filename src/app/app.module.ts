import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { AboutComponent } from './components/about/about.component';

//Servicios
import { VideojuegosService } from './services/videojuegos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BuscadorComponent,
    VideojuegoComponent,
    VideojuegosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    VideojuegosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
