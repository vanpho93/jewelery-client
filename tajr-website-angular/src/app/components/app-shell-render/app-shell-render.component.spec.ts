import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShellRenderComponent } from './app-shell-render.component';

describe('AppShellRenderComponent', () => {
  let component: AppShellRenderComponent;
  let fixture: ComponentFixture<AppShellRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppShellRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShellRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
