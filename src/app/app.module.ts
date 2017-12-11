import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// import { SmoothScrollToDirective, SmoothScrollDirective } from "./ng2-smooth-scroll/lib/ng2SmoothScroll";
//http://iamdustan.com/smoothscroll/

import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { PortalDetailComponent } from './portal-detail/portal-detail.component';
import { PortalsComponent } from './portals/portals.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SearchDetailComponent,
    PortalDetailComponent,
    PortalsComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ContactFormComponent,
    LoginComponent,
    RegisterComponent,
    // third party
    // SmoothScrollToDirective,
    // SmoothScrollDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    // Material.Angular.io
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
