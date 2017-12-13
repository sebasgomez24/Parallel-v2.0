import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// import { SmoothScrollToDirective, SmoothScrollDirective } from "./ng2-smooth-scroll/lib/ng2SmoothScroll";
//http://iamdustan.com/smoothscroll/

import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import { DashboardTopnavComponent } from './dashboard-topnav/dashboard-topnav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessageListComponent } from './message-list/message-list.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortalDetailComponent } from './portal-detail/portal-detail.component';
import { PortalListComponent } from './portal-list/portal-list.component';

import * as $ from 'jquery';





@NgModule({
  declarations: [
    AccountComponent,
    AppComponent,
    CommentsComponent,
    ContactFormComponent,
    DashboardComponent,
    DashboardSidenavComponent,
    DashboardTopnavComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    SearchComponent,
    SearchDetailComponent,
    PageNotFoundComponent,
    PortalDetailComponent,
    PortalListComponent,
    RegisterComponent,
    
    MessageListComponent,
    MessageDetailComponent,
    
    // third party
    // SmoothScrollToDirective,
    // SmoothScrollDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    // Material.Angular.io
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
