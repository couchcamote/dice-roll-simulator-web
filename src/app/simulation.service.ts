import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse} from 'src/app/response';
 
@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  response;
  // response =  {
  //   dto: null,
  //   text: null,
  //   list: [
  //     {
  //       total: 7,
  //       count: 2
  //     },
  //     {
  //       total: 8,
  //       count: 3
  //     },
  //     {
  //       total: 9,
  //       count: 2
  //     },
  //     {
  //       total: 10,
  //       count: 4
  //     },
  //     {
  //       total: 11,
  //       count: 4
  //     },
  //     {
  //       total: 12,
  //       count: 1
  //     },
  //     {
  //       total: 14,
  //       count: 1
  //     },
  //     {
  //       total: 15,
  //       count: 1
  //     },
  //     {
  //       total: 16,
  //       count: 2
  //     }
  //   ],
  //   message: 'Success',
  //   status: 'SUCCESS'
  // };

  private host = "localhost:8080"

  constructor(private http: HttpClient) {

  }

  getTotalsList(side:number, piece:number, roll:number) :  Observable<IResponse> {
    return this.http.get<IResponse>(`http://localhost:8080/api/simulate?piece=${piece}&side=${side}&roll=${roll}`);
  }

  getPieceSide() :  Observable<IResponse> {
    return this.http.get<IResponse>(`http://localhost:8080/api/piece-side`);
  }

  getPieceSideRelDist(side:number, piece:number) :  Observable<IResponse> {
    return this.http.get<IResponse>(`http://localhost:8080/api/piece-side-relative-dist?piece=${piece}&side=${side}`);
  }
}
