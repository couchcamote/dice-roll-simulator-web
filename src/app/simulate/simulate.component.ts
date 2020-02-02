import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.css']
})
export class SimulateComponent implements OnInit {
  i = 0;
  totals = [];

   constructor() { }

  ngOnInit() {
  }


}
