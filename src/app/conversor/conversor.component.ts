import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  graus: number = 0;
  radianos: number = 0;

  metros: number = 0;
  pes: number = 0;

  polegadas: number = 0;
  centimetros: number = 0;


  converterParaRadianos(): void {
    this.radianos = this.graus * Math.PI / 180;
  }

  converterParaGraus() {
    this.graus = this.radianos * 180 / Math.PI;
  }

  converterParaPes() {
    this.pes = this.metros * 3.28084;
  }

  converterParaMetros() {
    this.metros = this.pes / 3.28084;
  }
  
  converterParaCentimetros() {
    this.centimetros = this.polegadas * 2.54;
  }

  converterParaPolegadas() {
    this.polegadas = this.centimetros / 2.54;
  }
}
