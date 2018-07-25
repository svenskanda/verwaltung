import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
  
  public typ:String = '';
  
  public text:String = '';
  
  public showState:Boolean = false;
  
  constructor() {}
  
  /**
   * @param    config
   * @param    config.typ
   * @param    config.text
   * @param    config.ms
   */
  show(config) {
    var self = this;
    if(typeof config !== 'object') {
      config = {};
    }
    if(typeof config.typ !== 'string') {
      config.typ = 'success';
    }
    if(typeof config.text !== 'string') {
      config.text = '';
    }
    if(typeof config.ms !== 'string') {
      config.ms = 3000;
    }
    
    this.typ = config.typ;
    this.text = config.text;
    this.showState = true;
    
    setTimeout(function() {
      self.hide();
    }, config.ms);
  }
  
  hide() {
    this.typ = 'success';
    this.text = '';
    this.showState = false;
  }

}
