import { Component, OnInit } from '@angular/core';
import { GenerationModel } from 'src/shared/models/generation.model';
import { LoadGenerations } from './load-generations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex-generation';

  constructor() {
  }

  ngOnInit(): void {
  }
}
