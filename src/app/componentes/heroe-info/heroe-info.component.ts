import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "src/app/compartido/heroes.service";
import { Heroe } from "src/app/compartido/heroe";

@Component({
  selector: "app-heroe-info",
  templateUrl: "./heroe-info.component.html",
  styleUrls: ["./heroe-info.component.css"]
})
export class HeroeInfoComponent implements OnInit {
  heroe: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.heroe = this.heroeService.obtenerHeroe(param["id"]);
    });
  }
}
