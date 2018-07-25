import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../services/helper/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private alertService:AlertService) {}
  
  get show() {
    return this.alertService.showState;
  }
  
  get typ() {
    return this.alertService.typ;
  }
  
  get text() {
    return this.alertService.text;
  }
  
  ngOnInit() {}

}
