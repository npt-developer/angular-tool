import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerJsonComponent } from './viewer-json.component';

describe('ViewerJsonComponent', () => {
  let component: ViewerJsonComponent;
  let fixture: ComponentFixture<ViewerJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
