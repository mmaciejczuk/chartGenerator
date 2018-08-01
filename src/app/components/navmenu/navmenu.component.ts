import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../core/services/navigation.service';
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
    this.fillTeams();
  }

  fillTeams(): void {
    let x = this.navigationService.getTeams(this.teamsUrl).subscribe(res => {
        this.teams = res;
        console.log(this.teams);
    });
  }  
}
