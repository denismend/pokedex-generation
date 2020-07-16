import { Component, OnInit } from '@angular/core';
import { Generation } from 'src/shared/models/generation.model';
import { LoadGenerations } from './load-generations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex-generation';

  private generations: Generation[] = [];

  constructor(private loadGenerations: LoadGenerations) {
    this.generations = this.loadGenerations
      .generations.map(generation => {
        return {
          ...generation,
          name: generation.name.charAt(0).toUpperCase() + generation.name.slice(1)
        }
      });
  }

  ngOnInit(): void {
    console.log(this.generations);
  }
}
