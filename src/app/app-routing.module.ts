import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrumComponent } from './components/scrum/scrum.component';
import { TeamComponent } from './components/team/team.component';
import { SourcesComponent } from './components/sources/sources.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/scrum',
    pathMatch: 'full'
  },
  {
    path: 'scrum',
    component: ScrumComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'sources',
    component: SourcesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
