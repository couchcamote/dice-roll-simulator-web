import { Component, OnInit, Input } from '@angular/core';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.css']
})
export class SimulateComponent implements OnInit {
  totals;

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
      if(resp.status === 'SUCCESS'){
        this.totals = resp.list;
        this.show = false;
      }
      else{
        this.message = resp.message;
        this.show = true;
      }
    }, error => {
      console.error('error handled in page', error); // TODO: change this to show UI error component
    });
  }


}
