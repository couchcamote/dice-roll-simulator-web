import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-piecesidecomb',
  templateUrl: './piecesidecomb.component.html',
  styleUrls: ['./piecesidecomb.component.css']
})
export class PiecesidecombComponent implements OnInit {
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
        this.rows = resp;
        this.show = false;
    }, error => {
      console.error('error handled in page', error); // TODO: change this to show UI error component
      this.message = error.error.message;
      this.show = true;
    });
  }


}
