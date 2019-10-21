import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./componentes/compartido/navbar/navbar.component";
import { HomeComponent } from "./componentes/home/home.component";
import { AcercaDeComponent } from "./componentes/acerca-de/acerca-de.component";
import { HeroesComponent } from "./componentes/heroes/heroes.component";
import { APP_ROUTING } from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AcercaDeComponent,
    HeroesComponent
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
