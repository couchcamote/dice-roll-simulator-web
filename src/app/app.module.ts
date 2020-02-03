import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimulateComponent } from './simulate/simulate.component';
import { SimulationService } from './simulation.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { PiecesidecombComponent } from './piecesidecomb/piecesidecomb.component';
import { PiecesidereldistComponent } from './piecesidereldist/piecesidereldist.component';    

@NgModule({
  declarations: [
    AppComponent,
    SimulateComponent,
    PiecesidecombComponent,
    PiecesidereldistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SimulationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
