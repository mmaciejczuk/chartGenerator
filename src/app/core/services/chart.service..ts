import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ChartAlert } from "../../shared/models/chartAlert.model";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable(({providedIn:'root'}) as any)
export class ChartService {

  constructor(private http: HttpClient){}

  returnData(alertsUrl: string): Observable<ChartAlert[]> {
    return this.http.get<ChartAlert[]>(alertsUrl);
  }
}
