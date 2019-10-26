import { Component, OnInit, Input } from "@angular/core";
import { HeroesService } from "src/app/compartido/heroes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Heroe } from "src/app/compartido/heroe";

@Component({
  selector: "app-buscar-heroe",
  templateUrl: "./buscar-heroe.component.html",
  styleUrls: ["./buscar-heroe.component.css"]
})
export class BuscarHeroeComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => {
      this.heroes = this.heroesService.buscarHeroes(p["criterio"]);
    });
  }

  verDetalles(id: Event) {
    this.router.navigate(["/heroe-info", id]);
  }

  atras() {
    this.router.navigate(["/heroes"]);
  }
}
