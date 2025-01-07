import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutExampleComponent } from './put-example.component';

describe('PutExampleComponent', () => {
  let component: PutExampleComponent;
  let fixture: ComponentFixture<PutExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
