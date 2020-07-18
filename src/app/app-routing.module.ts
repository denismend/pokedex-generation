import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenerationResolver } from './home/generation.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { generations: GenerationResolver }
  },
  {
    path: 'generation',
    loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GenerationResolver]
})
export class AppRoutingModule { }
