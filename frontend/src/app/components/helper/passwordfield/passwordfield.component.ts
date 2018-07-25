import { Component, OnInit, Input } from '@angular/core';
import {PasswordUtilsService} from "../../../services/password-utils.service";

@Component({
  selector: 'app-passwordfield',
  templateUrl: './passwordfield.component.html',
  styleUrls: ['./passwordfield.component.css']
})
export class PasswordfieldComponent implements OnInit {

  @Input() label:String;

  /**
   * The Type defines to show the password, clearly or hide it.
   * Moegliche Werte "text" | "password"
   * Default is "password"
   * @author Sebastian Koers
   */
  @Input() type:String;

  /**
   * Value of Passwordfield
   * @author Sebastian Koers
   * @access public
   */
  public value:String;

  constructor(private passwordUtils:PasswordUtilsService) {}

  get buttonText() {
    return this.type === 'password' ? 'anzeigen' : 'ausblenden';
  }

  checkPassword() {
    this.passwordUtils.checkPassword();
  }

  ngOnInit() {}

}
