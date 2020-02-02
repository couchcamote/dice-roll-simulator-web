import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.css']
})
export class SimulateComponent implements OnInit {
  totals;
  roll;
  side;
  piece;

   constructor(private simulationService: SimulationService) {
     this.totals = this.simulationService.getTotalsList();
    }

  ngOnInit() {

  }

  onSubmit() {
    alert("XX"+ this.piece);
    console.log("FORM SUBMIT" + this.piece);
  }


}
