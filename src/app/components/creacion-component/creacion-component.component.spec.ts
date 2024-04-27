import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionComponentComponent } from './creacion-component.component';

describe('CreacionComponentComponent', () => {
  let component: CreacionComponentComponent;
  let fixture: ComponentFixture<CreacionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
