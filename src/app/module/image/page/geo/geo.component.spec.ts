import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGeoComponent } from './geo.component';

describe('ImageGeoComponent', () => {
  let component: ImageGeoComponent;
  let fixture: ComponentFixture<ImageGeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
