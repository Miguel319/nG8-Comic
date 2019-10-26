import { Component, OnInit } from "@angular/core";
import { HeroesService } from "src/app/compartido/heroes.service";
import { Heroe } from "src/app/compartido/heroe";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroeService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes = this.heroeService.obtenerHeroes();
  }

  verDetalles(id: Event) {
    this.router.navigate(["/heroe-info", id]);
  }
}
