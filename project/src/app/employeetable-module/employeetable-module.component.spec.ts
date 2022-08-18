import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetableModuleComponent } from './employeetable-module.component';

describe('EmployeetableModuleComponent', () => {
  let component: EmployeetableModuleComponent;
  let fixture: ComponentFixture<EmployeetableModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeetableModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeetableModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
