import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetExampleComponent } from './get-example.component';

describe('GetExampleComponent', () => {
  let component: GetExampleComponent;
  let fixture: ComponentFixture<GetExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
