import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroe-tarjeta",
  templateUrl: "./heroe-tarjeta.component.html",
  styleUrls: ["./heroe-tarjeta.component.css"]
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input("i") indice: number;
  @Output() heroeSeleccionado: EventEmitter<number> = new EventEmitter<
    number
  >();

  constructor() {}

  ngOnInit() {}

  verDetalles() {
    this.heroeSeleccionado.emit(this.indice);
  }
}
