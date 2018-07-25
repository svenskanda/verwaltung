import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutenModule } from './app.routes';
import { LoginComponent } from './components/views/no_login/login/login.component';
import { DashboardComponent } from './components/views/default/dashboard/dashboard.component';
import { AlertComponent } from './components/helper/alert/alert.component';

import { AlertService } from './services/helper/alert.service';
import { HttpService } from './services/http.service';
import { GridComponent } from './components/helper/grid/grid.component';
import { EditWindowComponent } from './components/helper/edit-window/edit-window.component';

import { GridService } from './services/helper/grid.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UtilsService } from './services/utils.service';

import { SelectComponent } from './components/form/select/select.component';
import { TextComponent } from './components/form/text/text.component';
import { SelectListComponent } from './components/form/select-list/select-list.component';
import { InlineEditWinComponent } from './components/helper/inline-edit-win/inline-edit-win.component';
import { RegisterComponent } from './components/views/no_login/register/register.component';
import { PasswordfieldComponent } from './components/helper/passwordfield/passwordfield.component';

var RoutesManager = new RoutenModule();

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AlertComponent,
    GridComponent,
    EditWindowComponent,
    SelectComponent,
    TextComponent,
    SelectListComponent,
    InlineEditWinComponent,
    RegisterComponent,
    PasswordfieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
        RoutesManager.routes
    )
  ],
  providers: [
    AlertService,
    HttpService,
    GridService,
    AuthService,
    UserService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
