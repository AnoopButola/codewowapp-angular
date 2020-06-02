import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbannerContentComponent } from './mainbanner-content.component';

describe('MainbannerContentComponent', () => {
  let component: MainbannerContentComponent;
  let fixture: ComponentFixture<MainbannerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainbannerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainbannerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
