import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
   converter() {
    const metrosInput = document.getElementById("metros") as HTMLInputElement;
    const metros = parseFloat(metrosInput.value);
    const centimetros = metros * 100;
    const centimetrosInput = document.getElementById("centimetros") as HTMLInputElement;
    centimetrosInput.value = centimetros.toString();
  }
}
