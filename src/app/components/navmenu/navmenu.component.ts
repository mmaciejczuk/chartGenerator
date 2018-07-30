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

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
    let teams = this.navigationService.getTeams();
    let teams2 = this.navigationService.getPosts();
  }
}
