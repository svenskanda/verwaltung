import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordfieldComponent } from './passwordfield.component';

describe('PasswordfieldComponent', () => {
  let component: PasswordfieldComponent;
  let fixture: ComponentFixture<PasswordfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
