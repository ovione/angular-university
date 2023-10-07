import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryExampleComponent } from './library-example.component';

describe('LibraryExampleComponent', () => {
  let component: LibraryExampleComponent;
  let fixture: ComponentFixture<LibraryExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
