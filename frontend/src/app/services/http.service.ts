import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  
  private apiUrl = 'http://localhost:8000/';
  
  constructor(private http:Http) {}
  
  async getR(route, callback) {
    var promise, url;
    if(typeof route === 'string') {
      url = encodeURI(this.apiUrl + route);
      promise = this.http.get(url).toPromise();
      await promise.then(function(resp) {
        if(typeof callback === 'function') {
          callback(resp.json());
        }
      });
    }
  }
  
  postR(route, params, callback) {
    var promise;
    if(typeof route === 'string') {
      var url = encodeURI(this.apiUrl + route);
      promise = this.http.post(url, {}).toPromise();
      promise.then(function(resp) {
        if(typeof callback === 'function') {
          callback(resp);
        }
      });
    }
  }

}
