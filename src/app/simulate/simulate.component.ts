import { Component, OnInit, Input } from '@angular/core';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.css']
})
export class SimulateComponent implements OnInit {
  rows;
  public roll = 100;
  public side = 6;
  public piece = 3;
  message = "";
  public show:boolean = false;

   constructor(private simulationService: SimulationService) {
    }

  ngOnInit() {

  }

  onSubmit() {
    console.log("FORM SUBMIT");
    this.simulationService.getTotalsList(this.side, this.piece, this.roll)
    .subscribe((resp) => {
      console.log("RESPONSE" + resp);
        this.rows = resp;
        this.show = false;
    }, error => {
      console.error('error handled in page', error); // TODO: change this to show UI error component
      this.message = error.error.message;
      this.show = true;
    });
  }


}
