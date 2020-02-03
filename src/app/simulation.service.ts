import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse} from 'src/app/response';
 
@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  response;

  host = "http://localhost:8080";

  constructor(private http: HttpClient) {

  }

  getTotalsList(side:number, piece:number, roll:number) :  Observable<IResponse> {
    return this.http.get<IResponse>(`${this.host}/api/simulate?piece=${piece}&side=${side}&roll=${roll}`);
  }

  getPieceSide() :  Observable<IResponse> {
    return this.http.get<IResponse>(`${this.host}/api/piece-side`);
  }

  getPieceSideRelDist(side:number, piece:number) :  Observable<IResponse> {
    return this.http.get<IResponse>(`${this.host}/api/piece-side-relative-dist?piece=${piece}&side=${side}`);
  }
}
