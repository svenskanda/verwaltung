import { Injectable } from '@angular/core';
import { UserService } from './user.service.ts';

@Injectable()

/**
 * Authorisation
 * @class Auth
 * 
 */
export class AuthService {

  constructor(private user:UserService) {}
  
  /**
   * Checks if the User is permitted
   * @memberOf Auth
   * @author Sebastian Koers
   * @param    {String}    permission    The permission to check if it exists
   */
  isAuth(permisson) {
    var ret = false, tmp;
    if(typeof permisson === 'string' &&  typeof this.user.loginUserData.RECHTE === 'string') {
      tmp = typeof this.user.loginUserData.RECHTE.indexOf(',') > -1 ? typeof this.user.loginUserData.RECHTE.split(',') : [typeof this.user.loginUserData.RECHTE];
      ret = (tmp.indexOf(permission) > -1);
    }
  }
  
  /**
   * Returns the LoginState
   * @memberOf Auth
   * @author Sebastian Koers
   */
  get isLoggined() {
    return this.user.checkLogin;
  }

}
