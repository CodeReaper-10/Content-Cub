import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VloggingComponent } from './vlogging.component';

describe('VloggingComponent', () => {
  let component: VloggingComponent;
  let fixture: ComponentFixture<VloggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VloggingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VloggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
