import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './patient-form.component.html'
})
export class PatientFormComponent {
  @Output() close = new EventEmitter<void>();
  
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      patientName: [''],
      dateOfBirth: [''],
      patientId: [''],
      eventType: [''],
      visitReason: [''],
      status: ['luonnos'],
      doctor: ['Tuomas Veikko Kerola'],
      receptionDate: ['29/10/2024 14:49'],
      additionalInfo: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.close.emit();
    }
  }

  onCancel() {
    this.close.emit();
  }
}