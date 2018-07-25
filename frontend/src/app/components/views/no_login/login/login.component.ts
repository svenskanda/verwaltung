import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../../services/helper/alert.service';
import { HttpService } from '../../../../services/http.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * Username bzw. E-Mail
   * @access public
   * @author Sebastian Koers
   */
  public username:String = '';

  /**
   * Passwort
   * @access public
   * @author Sebastian Koers
   */
  public password:String = '';

  /**
   * Typ des Login
   * Moegliche Werte: 'email', 'username'
   * @access public
   * @author Sebastian Koers
   */
  public loginType:String = 'username';

  /**
   * Array mit Fehlermeldungen
   * @access public
   * @author Sebastian Koers
   */
  public errors = [];
  
  constructor(private alertService:AlertService, private http:HttpService) {
    console.log(HttpService)
  }

  /**
   * Diese Methode logged den User im System ein.
   * @author Sebastian Koers
   */
  loginUser() {
    var emptyField;
    if(this.username !== '' && this.password !== '') {
      // Request absetzen
    } else {
      // Errormeldung ausgeben
    }
  }

  ngOnInit() {
  }

}
