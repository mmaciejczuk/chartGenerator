import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { HttpModule } from '@angular/http';

import { NavigationService } from './core/service/navigation.service';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 08ea644374c11329d30dad0f7bdc30f138591122


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    HttpModule, 
    HttpClientModule,   
=======
    HttpModule,    
>>>>>>> 08ea644374c11329d30dad0f7bdc30f138591122
  ],
  providers: [
    NavigationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }