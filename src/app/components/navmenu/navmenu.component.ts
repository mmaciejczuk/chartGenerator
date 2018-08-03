import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../core/services/navigation.service';
import { Team } from '../../shared/models/team.model';
import { ConfigurationService } from '../../core/services/configuration.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css'],
  providers: [NavigationService, ConfigurationService]
})
export class NavmenuComponent implements OnInit {
  teams: Array<Team>;
  teamsUrl: string = 'http://localhost:3000/teams';
  
  constructor(public navigationService: NavigationService, config: ConfigurationService) {    
   }

  ngOnInit() {
    this.fillTeams();
    console.log("test");
  }

  fillTeams(): void {
    let x = this.navigationService.getTeams(this.teamsUrl).subscribe(res => {
        this.teams = res;
        console.log(this.teams);
    });
  }
}
