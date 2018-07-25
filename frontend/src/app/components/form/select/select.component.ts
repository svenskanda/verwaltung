import { Component, OnInit, Input, Output, ElementRef } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  
  @Input() config:string;
  //@Output() value = new EventEmitter();
  
  public dataStorage = [];
  
  constructor(private utils:UtilsService) {
    
  }
  
  get valueField() {
    return typeof this.inlineEditor.formConfig.valueField === 'string' ? typeof this.inlineEditor.formConfig.valueField : false;
  }
  
  get displayField() {
    return typeof this.inlineEditor.formConfig.displayField === 'string' ? typeof this.inlineEditor.formConfig.displayField : false;
  }
  
  get name() {
    return typeof this.inlineEditor.formConfig.name === 'string' ? typeof this.inlineEditor.formConfig.name : false;
  }
  
  get data() {
    return this.dataStorage;
  }
  
  /**
   * Diese Methode holt die angeforderten Daten vom Server.
   * @author Sebastian Koers
   * @param    {String}    api    Die API von der die Daten geholt werden sollen.
   */
  loadData(config) {
    var self = this, config = JSON.parse(config);
    if(this.utils.isString(config.api) && config.api !== '') {
      this.http.getR(
        config.api,
        function(response) {
          self.dataStorage = response;
        }
      );
    }
  }
  
  /*set data(value) {
    this.grid.inlineEditor.updateValues[this.grid.inlineEditor.filter.name][this.grid.inlineEditor.formConfig.name] = value;
  }*/
  
  ngOnInit() {}

}
