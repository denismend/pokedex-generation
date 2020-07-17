import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Generation } from 'src/shared/models/generation.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public generations: Generation[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.generations = this.route.snapshot.data.generations;
    });
  }

}
