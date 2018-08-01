import { Component, OnInit, Injectable } from '@angular/core';
import { NavigationService } from '../../core/service/navigation.service';
import { Team } from '../../shared/models/team.model';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css'],
  providers: [NavigationService]
})
export class NavmenuComponent implements OnInit {
  teams: Array<Team>;
  teamsUrl: string = 'http://localhost:3000/teams';
  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
    this.getTeams();
    console.log(this.teams);
  }

  getTeams(): void {
    // let c = this.navigationService.getTeams().subscribe(res => this.teams = res as Team[]);
    // console.log(c);
    let x = this.navigationService.getTeams(this.teamsUrl).subscribe(res => {
      console.log("to jest res " + res);
        this.teams = res;
        console.log("to jest teams " + this.teams);
    });
  }  
}
