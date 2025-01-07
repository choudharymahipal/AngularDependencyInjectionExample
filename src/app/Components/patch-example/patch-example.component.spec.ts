import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchExampleComponent } from './patch-example.component';

describe('PatchExampleComponent', () => {
  let component: PatchExampleComponent;
  let fixture: ComponentFixture<PatchExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatchExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
