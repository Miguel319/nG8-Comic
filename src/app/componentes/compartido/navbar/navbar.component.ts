import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeroesService } from "src/app/compartido/heroes.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  buscarHeroe(criterio: string) {
    this.router.navigate(["/heroes-buscar", criterio]);
  }
}
