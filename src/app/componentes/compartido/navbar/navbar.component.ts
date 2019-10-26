import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { HeroesService } from "src/app/compartido/heroes.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @ViewChild("texto", { static: false }) texto: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {}

  buscarHeroe(criterio: string) {
    this.router.navigate(["/heroes-buscar", criterio]);

    this.texto.nativeElement.value = "";
  }
}
