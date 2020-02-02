import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  response =  {
    dto: null,
    text: null,
    list: [
      {
        total: 7,
        count: 2
      },
      {
        total: 8,
        count: 3
      },
      {
        total: 9,
        count: 2
      },
      {
        total: 10,
        count: 4
      },
      {
        total: 11,
        count: 4
      },
      {
        total: 12,
        count: 1
      },
      {
        total: 14,
        count: 1
      },
      {
        total: 15,
        count: 1
      },
      {
        total: 16,
        count: 2
      }
    ],
    message: 'Success',
    status: 'SUCCESS'
  };

  totals = this.response.list;

  constructor() {

  }

  getTotalsList(){
    return this.totals;
  }



}
