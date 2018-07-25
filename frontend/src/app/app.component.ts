import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public mobilerExpandedState = false;
  
  public items = {
    web: [
      {
        name: 'Über uns',
        route: 'about'
      }, {
        name: 'Archiv',
        route: 'archiv'
      }, {
        name: 'Ergebnisse',
        route: 'results'
      }, {
        name: 'Könige',
        route: 'awards'
      }, {
        name: 'Login',
        route: 'login'
      }
    ],
    login: []
  };
  
  get mobilerExpanded() {
    return this.mobilerExpandedState;
  }
  
  toggleState() {
    this.mobilerExpandedState = this.mobilerExpandedState === false;
  }
  
}
