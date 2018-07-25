import { Injectable } from '@angular/core';

@Injectable()
export class PasswordUtilsService {

  constructor() {}

  /**
   * This method checks the Password of guidelines.
   * GUIDELINES:
   *   - The password must have 10 characters at least.
   *   - The password must have one special character
   *   - The password must consists of upper- and lowercase letters
   *   - The password must have two figure
   *  @author Sebastian Koers
   *  @param    {String}    value    The password to check.
   *  @return   {Object}    ret
   *  @return   {Boolean}   ret.status=false
   *  @return   {errors}    ret.errors
   */
  checkPassword(value:String) {
    var ret = {
        status: false,
        errors: []
      }, regex = {
        figures: '/[0-9]{2,}/',
        letters: '/[a-zA-Z]/',
        chars: '/(!|"|§|$|%|&|(|)|=|?|*|.|-|_|<|>)/'
      }, p, tmpReg
    ;

    if(typeof value === 'string') {
      for(p in regex) {
        tmpReg = new RegExp(p);
      }
    } else {
      ret.errors.push('Unbegründeter Kennwortfehler');
    }

  }


}
