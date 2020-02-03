import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-piecesidecomb',
  templateUrl: './piecesidecomb.component.html',
  styleUrls: ['./piecesidecomb.component.css']
})
export class PiecesidecombComponent implements OnInit {
  totals;
  message = "";
  public show:boolean = false;
  public rows;

   constructor(private simulationService: SimulationService) {
    }

  ngOnInit() {

  }

  onSubmit() {
    console.log("FORM SUBMIT");
    this.simulationService.getPieceSide()
    .subscribe((resp) => {
      console.log("RESPONSE" + resp);
      if(resp.status === 'SUCCESS'){
        this.rows = resp.list;
        this.show = false;
      }else{
        this.message = resp.message;
        this.show = true;
      }
    }, error => {
      console.error('error handled in page', error); // TODO: change this to show UI error component
    });
  }


}
