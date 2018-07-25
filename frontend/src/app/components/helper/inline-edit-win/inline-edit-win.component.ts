import { Component, OnInit } from '@angular/core';
import { GridService } from '../../../services/helper/grid.service';

@Component({
  selector: 'app-inline-edit-win',
  templateUrl: './inline-edit-win.component.html',
  styleUrls: ['./inline-edit-win.component.css']
})
export class InlineEditWinComponent implements OnInit {
  
  constructor(private grid:GridService) {}
  
  get config() {
    return JSON.stringify(this.grid.inlineEditor.formConfig);
  }

  ngOnInit() {}

}
