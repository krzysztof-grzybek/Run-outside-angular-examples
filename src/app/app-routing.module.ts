import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'timers',
    loadChildren: './timers/timers.module#TimersModule'
  },
  {
    path: 'outside-clicks',
    loadChildren: './outside-clicks/outside-clicks.module#OutsideClicksModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
