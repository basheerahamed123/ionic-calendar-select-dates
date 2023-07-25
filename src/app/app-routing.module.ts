// Example app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { DateSelectionPage } from './date-selection/date-selection.page';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'date-selection', component: DateSelectionPage },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
