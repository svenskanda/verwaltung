import { Injectable } from '@angular/core';

@Injectable()
/**
 * User - Objekt
 * @class User
 */
export class UserService {
  
  /**
   * LoginState
   * @memberOf User
   * @access private
   */
  private loginState:Boolean = false;
  
  /**
   * UserData
   * @memberOf User
   * @access private
   */
  private loginUserDataStorage = {};
  
  constructor() {}
  
  /**
   * Getter for LoginState
   * @memberOf User
   * @author Sebastian
   */
  get checkLogin() {
    return this.loginState;
  }
  
  /**
   * Setter for LoginState
   * @memberOf User
   * @author Sebastian Koers
   * @param    {Boolean}    state    LoginStatus to set
   */
  set checkLogin(state) {
    this.loginState = state;
  }
  
  /**
   * Getter for Userdata (Loggined User)
   * @memberOf User
   * @author Sebastian Koers
   */
  get loginUserData() {
    return this.loginUserDataStorage;
  }
  
  /**
   * Setter for Userdata (Loggined User)
   * @memberOf User
   * @author Sebastian Koers
   * @param    {Object}    obj    Object with data for logined User. Get from API.
   */
  set loginUserData(obj) {
    if(typeof obj === 'object') {
      this.loginUserDataStorage = obj;
    }
  }

}
