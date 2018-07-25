
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import der Routen
import {NO_LOGIN_ROUTES } from './components/views/no_login/no_login.routes';
import {LOGIN_ROUTES } from './components/views/after_login/login.routes';
import {DEFAULT_ROUTES } from './components/views/default/default.routes';

// Import von Services
import { UserService } from "./services/user.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

/**
 * @class RoutenModule
 * @classdesc Dieses Modul verwaltet alle verfügbarern Routen im System
 * @author Sebastian Koers
 */
export class RoutenModule {

  /**
   * UserService
   * @access private
   * @author Sebastian Koers
   * @var UserService
   */
  private user:UserService;

  constructor() {
    this.user = new UserService();
  }

  /**
   * Diese Methode ermittel die aktuell erreichbaren Routen
   * (@TODO: Später muss diese Methode optimiert werden - DRY)
   * @memberOf RoutenModule
   * @author Sebastian Koers
   */
  get routes() {
    var i, j, allRoutes = [];

    for(i = 0; i < DEFAULT_ROUTES.length; i++) {
      allRoutes.push(DEFAULT_ROUTES[i]);
    }

    if(this.user.checkLogin) {
      var alreadyExists = false;
      for(i = 0; i < LOGIN_ROUTES.length; i++) {
        alreadyExists = false;
        for(j = 0; j < allRoutes.length; j++) {
          alreadyExists = allRoutes[j].path === LOGIN_ROUTES[i].path;
        }
        if(alreadyExists === false) {
          allRoutes.push(LOGIN_ROUTES[i]);
        }
      }
    } else {
      for(i = 0; i < NO_LOGIN_ROUTES.length; i++) {
        alreadyExists = false;
        for(j = 0; j < allRoutes.length; j++) {
          alreadyExists = allRoutes[j].path === NO_LOGIN_ROUTES[i].path;
        }
        if(alreadyExists === false) {
          allRoutes.push(NO_LOGIN_ROUTES[i]);
        }
      }
    }

    return allRoutes;
  }
}