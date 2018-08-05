import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Api } from "../../shared/models/api.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable(({providedIn:'root'}) as any)
export class ApiService {

  constructor(private http: HttpClient){}

  getData(alertsUrl: string): Observable<Api[]> {
    return this.http.get<Api[]>(alertsUrl);
  }
}
