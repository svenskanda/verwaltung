import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditWinComponent } from './inline-edit-win.component';

describe('InlineEditWinComponent', () => {
  let component: InlineEditWinComponent;
  let fixture: ComponentFixture<InlineEditWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineEditWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEditWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
