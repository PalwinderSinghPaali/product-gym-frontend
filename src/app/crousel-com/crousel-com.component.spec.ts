import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrouselComComponent } from './crousel-com.component';

describe('CrouselComComponent', () => {
  let component: CrouselComComponent;
  let fixture: ComponentFixture<CrouselComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrouselComComponent]
    });
    fixture = TestBed.createComponent(CrouselComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
