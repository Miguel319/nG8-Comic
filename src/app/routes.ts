import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./componentes/home/home.component";
import { AcercaDeComponent } from "./componentes/acerca-de/acerca-de.component";
import { HeroesComponent } from "./componentes/heroes/heroes.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "acerca-de", component: AcercaDeComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
