import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./componentes/compartido/navbar/navbar.component";
import { HomeComponent } from "./componentes/home/home.component";
import { AcercaDeComponent } from "./componentes/acerca-de/acerca-de.component";
import { HeroesComponent } from "./componentes/heroes/heroes.component";
import { APP_ROUTING } from "./routes";
import { HeroesService } from './compartido/heroes.service';
import { HeroeInfoComponent } from './componentes/heroe-info/heroe-info.component';
import { BuscarHeroeComponent } from './componentes/buscar-heroe/buscar-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AcercaDeComponent,
    HeroesComponent,
    HeroeInfoComponent,
    BuscarHeroeComponent
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
