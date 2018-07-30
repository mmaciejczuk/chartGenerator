import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import {User} from "../../shared/models/user.model";
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  getUser() {
    return this.http.get('/api/user')
      .map((res: Response) => res.json().response);
  }
}