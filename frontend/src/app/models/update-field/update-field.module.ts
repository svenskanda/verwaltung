import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UpdateFieldModule {
  
  private fieldname: string;
  
  private value:any;
  
  private filterfield:string;
  
  private filtervalue:any;
  
  /**
   * Erzeugt ein neues Objekt mit allen Informationen, um
   * ein Feld zu aktualisieren.
   * @memberOf updateField
   * @author Sebastian Koers
   * @param    {Object}    config
   * @param    {Object}    config.fieldname
   * @param    {Object}    config.value
   * @param    {Object}    config.filterfield
   * @param    {Object}    config,filtervalue
   */
  constructor(config) {
    if(typeof config.fieldname === 'string' && typeof config.filterfield === 'string'
      && (typeof config.value === 'number' || typeof config.value === 'string')
      && (typeof config.filtervalue === 'number' || typeof config.filtervalue === 'string')
    ) {
      this.fieldname = config.fieldname;
      this.value = config.value;
      this.filtervalue = config.filtervalue;
      this.filterfield = config-filterfield;
    }
  }
}
