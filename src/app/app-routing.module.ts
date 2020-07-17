import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { GenerationResolver } from './home/generation.resolver';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        resolve: { generations: GenerationResolver }
      },
      {
        path: 'generation/:generation',
        component: GamesComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GenerationResolver]
})
export class AppRoutingModule { }
