import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() {}
  
  isObject(val:any) {
    return (typeof val === 'object');
  }
  
  isString(val:any) {
    return (typeof val === 'string');
  }
  
  isNumber(val:any) {
    return (typeof val === 'number');
  }
  
  isBoolean(val:any) {
    return (typeof val === 'boolean');
  }
  
  isArray(val:any) {
    return(Array.isArray(val));
  }

}
