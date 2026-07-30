import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  somar() {
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }

  subtrair() {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir() {
    this.resultado = this.numero2 !== 0 ? this.numero1 / this.numero2 : 0;
  }
}