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
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LowerUpperPipeComponent } from './core/pipes/lower-upper-pipe/lower-upper-pipe.component';
import { ChartComponent } from './components/chart/chart.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NavmenuComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LowerUpperPipeComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    HttpClientModule,   
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'Home', component: HomeComponent },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'Administracja', component: DashboardComponent },
      { path: 'Fakturowanie', component: DashboardComponent },
      { path: 'Finanse', component: DashboardComponent },
      { path: 'Obsługa techniczna', component: DashboardComponent },
      { path: 'Rozliczenia', component: DashboardComponent },
      { path: 'Sprawozdawczość', component: DashboardComponent },
      { path: '**', component: PageNotFoundComponent },
    ])
  ],
  providers: [
    NavigationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }