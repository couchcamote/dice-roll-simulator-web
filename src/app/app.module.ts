import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimulateComponent } from './simulate/simulate.component';
import { SimulationService } from './simulation.service';

@NgModule({
  declarations: [
    AppComponent,
    SimulateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SimulationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
