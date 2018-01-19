import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostformcomponentComponent } from './postformcomponent.component';

describe('PostformcomponentComponent', () => {
  let component: PostformcomponentComponent;
  let fixture: ComponentFixture<PostformcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostformcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostformcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
