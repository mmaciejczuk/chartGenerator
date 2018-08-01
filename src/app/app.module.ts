import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { HttpModule } from '@angular/http';

import { NavigationService } from './core/services/navigation.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    HttpClientModule,   

  ],
  providers: [
    NavigationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }