import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComponetComponent } from './all.componet.component';

describe('AllComponetComponent', () => {
  let component: AllComponetComponent;
  let fixture: ComponentFixture<AllComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllComponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
