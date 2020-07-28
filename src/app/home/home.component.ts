import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenerationModel } from 'src/shared/models/generation.model';
import { PokemonService } from 'src/shared/services/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public generations: GenerationModel[];

  constructor(private route: ActivatedRoute,
    private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.generations = this.route.snapshot.data.generations;
    });

    this.generations.forEach(generation => {
      this.pokemonService.getGenerationByName(generation.name).subscribe(result => {
        generation.version_groups = result.version_groups;
      });
    });
  }

}
