import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbannerRegistrationComponent } from './mainbanner-registration.component';

describe('MainbannerRegistrationComponent', () => {
  let component: MainbannerRegistrationComponent;
  let fixture: ComponentFixture<MainbannerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainbannerRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainbannerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
