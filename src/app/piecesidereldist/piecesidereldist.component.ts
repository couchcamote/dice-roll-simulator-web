import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-piecesidereldist',
  templateUrl: './piecesidereldist.component.html',
  styleUrls: ['./piecesidereldist.component.css']
})
export class PiecesidereldistComponent implements OnInit {
  public rows;
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
    this.simulationService.getPieceSideRelDist(this.side, this.piece)
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
