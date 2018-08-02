import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NavigationService } from './core/services/navigation.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NavmenuComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    HttpClientModule,   
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '**', component: PageNotFoundComponent },
    ])
  ],
  providers: [
    NavigationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }