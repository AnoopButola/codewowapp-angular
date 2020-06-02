import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbannerComponent } from './mainbanner.component';

describe('MainbannerComponent', () => {
  let component: MainbannerComponent;
  let fixture: ComponentFixture<MainbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
