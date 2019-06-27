import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsGroupComponent } from './settings-group.component';
import { AppModule } from '../../../../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

describe('SettingsGroupComponent', () => {
  let component: SettingsGroupComponent;
  let fixture: ComponentFixture<SettingsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: ''
        },
        ChangeDetectorRef
      ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
