import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page'; // Import the HomePage component
import { HomeRoutingModule } from './home-routing.module'; // Import the HomeRoutingModule

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    IonicModule,
    HomeRoutingModule,
  ],
})
export class HomePageModule {}
