import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoAngular } from './projeto-angular';

describe('ProjetoAngular', () => {
  let component: ProjetoAngular;
  let fixture: ComponentFixture<ProjetoAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoAngular],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoAngular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
