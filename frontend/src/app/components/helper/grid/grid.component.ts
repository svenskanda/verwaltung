import { Component, OnInit } from '@angular/core';
import { GridService } from '../../../services/helper/grid.service';
import { HttpService } from '../../../services/http.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
/**
 * @class GridComponent
 * @classdesc generiche Grid
 */
export class GridComponent implements OnInit {

  public dataStorage = [];
  
  constructor(
    private gridService:GridService,
    private http:HttpService,
    public auth:AuthService
  ) {
    
  }
  
  /**
   * Get request data.
   * @memberOf GridComponent
   * @author Sebastian Koers
   */
  private async requestGridData(api) {
    var self = this;
    /*this.http.getR(api, function(json)  {
      self.dataStorage = json;
    });*/
  }
  
  get config() {
    return this.gridService.config;
  }
  
  /**
   * Getter for Tablefields with configuration.
   * @memberOf GridComponent
   * @author Sebastian Koers
   */
  get fields() {
    return Array.isArray(this.config.fields) ? this.config.fields : [];
  }
  
  /**
   * Getter for Insert - API
   * @memberOf GridComponent
   * @author Sebastian Koers
   */
  get insert() {
    return typeof this.config.insert === 'object' ? this.config.insert : false;
  }
  
  get insertButtonText() {
    return typeof this.config.insert.buttonText === 'object' ? this.config.insert.buttonText : 'Hinzufügen';
  }
  
  /**
   * Getter for Update - API
   * @memberOf GridComponent
   * @author Sebastian Koers
   */
  get update() {
    return typeof this.config.update === 'object' ? this.config.update : false;
  }
  
  get updateButtonText() {
    return typeof this.config.update.buttonText === 'object' ? this.config.update.buttonText : 'Bearbeiten';
  }
  
  /**
   * Getter for Delete - API
   * @memberOf GridComponent
   * @author Sebastian Koers
   */
  get del() {
    return typeof this.config.del === 'object' ? this.config.del : false;
  }
  
  get delButtonText() {
    return typeof this.config.del.buttonText === 'object' ? this.config.del.buttonText : 'Löschen';
  }
  
  /**
   * Getter for Inhalte
   * @memeberOf GridComponent
   * @author Sebastian Koers
   */
  get data() {
    return this.dataStorage;
  }
  
  /**
   * Initialisierung
   * @memberOf GridComponent
   * @author Sebastian Koers
   */
  ngOnInit() {
    if(typeof this.config.apiRoute === 'string') {
      this.requestGridData(this.gridService.config.apiRoute);
    }
  }

}
