import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrainingComponent } from './user-training.component';

describe('UserTrainingComponent', () => {
  let component: UserTrainingComponent;
  let fixture: ComponentFixture<UserTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
