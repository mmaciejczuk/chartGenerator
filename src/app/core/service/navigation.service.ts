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
  teamsUrl: string = 'http://localhost:3000/teams';
  teams: any;

  getTeams (): Observable<Team[]> {
    let x = this.http.get<Team[]>(this.teamsUrl); 

    return x;
  }
}

// https://www.google.pl/search?ei=nl1gW4XMNOaP6ASf5r_oAQ&q=typescript+httpclient+get+json+to+object&oq=typescript+httpclient+get+json+to+object&gs_l=psy-ab.3...1986.3473.0.4241.10.10.0.0.0.0.314.1276.2j2j2j1.7.0....0...1c.1.64.psy-ab..5.1.170...0i8i7i30k1.0.BEPmb6AfhuE

