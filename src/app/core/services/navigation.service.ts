import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
import {Team} from "../../shared/models/team.model";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable(({providedIn:'root'}) as any)
export class NavigationService {
  constructor(private http: HttpClient) {}

  getTeams(teamsUrl: string): Observable<Team[]> {
        return this.http.get<Team[]>(teamsUrl);
  }
}
