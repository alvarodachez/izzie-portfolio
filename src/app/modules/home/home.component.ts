import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items = ['DISEÑADORA GRÁFICA', 'DISEÑADORA GRÁFICA', 'DISEÑADORA GRÁFICA']; // Repetir el texto para que el carrusel parezca infinito
  constructor() {}

  ngOnInit() {}
}
