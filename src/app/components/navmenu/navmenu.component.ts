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
  teams: Team[];
  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
    this.getTeams();
    console.log(this.teams);
  }

  getTeams(): void {
    this.navigationService.getTeams()
      .subscribe(heroes => this.teams = heroes);
  }  
}
