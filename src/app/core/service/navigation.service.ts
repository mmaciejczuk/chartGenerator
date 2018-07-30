import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import {Team} from "../../shared/models/team.model";
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class NavigationService {
  constructor(private http: Http) {}
  teams: any;

  //https://symbiotics.co.za/using-observables-in-angular-4-to-get-data-from-an-api-service/

  getTeams() {
    //return this.http.get('http://localhost:3000/teams')
    //  .pipe(map((res: Response) => res.json().response.map((teams: Team) => new Team().deserialize(teams))));
    let x = this.http
    .get('http://localhost:3000/teams').map(res => res.json()).subscribe(res => this.teams = res);
    
    // .subscribe(data => {
    //   this.teams = data['name'];
       console.log(x);
    // })   
  }

  getPosts(): Observable<any> {
    let x = this.http
        .get('http://localhost:3000/teams')
        .map((response: Response) => {
            return <any>response.json();
        });
        console.log(x);
        return x;
        //.catch(this.handleError);
}

  // getTeams() {
  //   //return this.http.get('http://localhost:3000/teams')
  //   //  .pipe(map((res: Response) => res.json().response.map((teams: Team) => new Team().deserialize(teams))));
  //   let x = this.http
  //   .get('http://localhost:3000/teams')
  //   .subscribe(data => new Team().deserialize(data['teams']));  
  //   return x; 
  // }  
}

