import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KampusComponent } from './kampus.component';

describe('KampusComponent', () => {
  let component: KampusComponent;
  let fixture: ComponentFixture<KampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KampusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
