import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listaprodutos } from './listaprodutos/listaprodutos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Listaprodutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projetos_angular');
}
