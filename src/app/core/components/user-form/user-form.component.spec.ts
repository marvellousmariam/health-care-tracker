// user-form.component.spec.ts

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';
import { Component } from '@angular/core';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [UserFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with username, workout type, and minutes fields', () => {
    const form = fixture.nativeElement.querySelector('form');
    expect(form).toBeTruthy();

    const usernameInput = form.querySelector('input[id="username"]');
    expect(usernameInput).toBeTruthy();

    const workoutTypeSelect = form.querySelector('select[id="workout-type"]');
    expect(workoutTypeSelect).toBeTruthy();

    const minutesInput = form.querySelector('input[id="minutes"]');
    expect(minutesInput).toBeTruthy();
  });

  it('should submit the form when the submit button is clicked', () => {
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton).toBeTruthy();

    const form = fixture.nativeElement.querySelector('form');
 

    submitButton.click();
    expect(Component).toHaveBeenCalledTimes(1);
  });

  it('should validate the form when the submit button is clicked', () => {
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton).toBeTruthy();

    const form = fixture.nativeElement.querySelector('form');
    const usernameInput = form.querySelector('input[id="username"]');
    const minutesInput = form.querySelector('input[id="minutes"]');

    usernameInput.value = '';
    minutesInput.value = '';

    submitButton.click();


    usernameInput.value = 'John Doe';
    minutesInput.value = '30';

    submitButton.click();

   
  });
});