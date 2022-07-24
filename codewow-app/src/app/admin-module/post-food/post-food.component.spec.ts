import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFoodComponent } from './post-food.component';

describe('PostFoodComponent', () => {
  let component: PostFoodComponent;
  let fixture: ComponentFixture<PostFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
