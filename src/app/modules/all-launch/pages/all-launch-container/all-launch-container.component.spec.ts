import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLaunchContainerComponent } from './all-launch-container.component';

describe('AllLaunchContainerComponent', () => {
  let component: AllLaunchContainerComponent;
  let fixture: ComponentFixture<AllLaunchContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLaunchContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLaunchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
