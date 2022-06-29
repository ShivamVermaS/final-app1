import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileCompoComponent } from './user-profile-compo.component';

describe('UserProfileCompoComponent', () => {
  let component: UserProfileCompoComponent;
  let fixture: ComponentFixture<UserProfileCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileCompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
