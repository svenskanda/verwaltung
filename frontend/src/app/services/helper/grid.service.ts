import { Injectable } from '@angular/core';

@Injectable()
export class GridService {
  
  /**
   * Configuration of Inline-Grid-Editor
   * @access public
   * @author Sebastian Koers
   */
  public inlineEditor = {
    type: '',
    filter: {
      field: '',
      value: ''
    },
    updateValues: [],
    formConfig: {}
  };
  
  /**
   * Konfigurationsobjekt
   * @access public
   * @author Sebastian Koers
   * {
   *   fields: [
   *     {
   *       header:
   *       name:
   *       editable:
   *       form: {
   *         type: text / select / list
   *         api: / select / list
   *         valueField: / select / list
   *         displayField: /select / list
   *         name: text / select / list
   *       }
   *     }
   *   ],
   *   apiRoute: '',
   *   insert: {
   *     **apiRoute: '',
   *     **auth: '',
   *     **buttonIcon: '',
   *     buttonText: '',
   *     **onlyIcon: false,
   *   },
   *   update: {
   *     apiRoute: '',
   *     auth: '',
   *     filter: {
   *       field: '',
   *       value: ''
   *     }
   *     buttonIcon: '',
   *     buttonText: '',
   *     onlyIcon: false,
   *   },
   *   delete: {
   *     apiRoute: '',
   *     auth: '',
   *     filter: {
   *       field: '',
   *       value: ''
   *     }
   *     buttonIcon: '',
   *     buttonText: '',
   *     onlyIcon: false,
   *   },
   *   copyAndInsert: '<RECHT>'
   *   copyToClipboard: '<RECHT>' 
   * }
   */
  public config = {
    fields: [],
    apiRoute: '',
    insert: {},
    update: {},
    del: {}
  };
  
  constructor() {}

}
