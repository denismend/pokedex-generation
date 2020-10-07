import { Component, Input, OnInit } from '@angular/core';
import { GenerationModel } from 'src/shared/models/generation.model';

@Component({
  selector: 'generation-card',
  templateUrl: './generation-card.component.html',
  styleUrls: ['./generation-card.component.scss']
})
export class GenerationCardComponent implements OnInit {

  @Input() generation: GenerationModel;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
