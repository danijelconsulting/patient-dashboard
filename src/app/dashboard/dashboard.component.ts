import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppointmentCardComponent, Appointment } from '../shared/appointment-card/appointment-card.component';
import { PatientFormComponent } from '../patient-form/patient-form.component';
import { GridCardComponent } from '../shared/grid-card/grid-card.component';
import { HeaderComponent } from '../shared/header/header.component';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { PatientInfoComponent, Patient } from '../shared/patient-info/patient-info.component';
import { FormsModule } from '@angular/forms';

interface GridItem {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    AppointmentCardComponent,
    PatientFormComponent,
    GridCardComponent,
    HeaderComponent,
    NavigationComponent,
    PatientInfoComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showPatientForm = signal(false);
  searchTerm = '';
  activeTab: 'previous' | 'tomorrow' = 'previous';

  gridItems: GridItem[] = [
    { icon: 'description', label: 'Hospital Record' },
    { icon: 'science', label: 'Lab Results' },
    { icon: 'fact_check', label: 'Certificates' },
    { icon: 'medication', label: 'Prescription' },
    { icon: 'image', label: 'Imaging' },
    { icon: 'list_alt', label: 'Referral List' }
  ];

  previousAppointments: Appointment[] = [
    { time: '09:00 AM', name: 'John Smith', id: '240545-123Y', status: 'Remote Session', note: 'Hi doctor, thank you for accepting the appointment. I need help with new symptoms that I started experiencing last week.' },
    { time: '09:45 AM', name: 'Kaarina Mäkinen', id: '210637-963A', status: 'Remote Session' },
    { time: '10:30 AM', name: 'Antti Virtanen', id: '060526-741B', status: 'Office Visit' },
    { time: '11:15 AM', name: 'Mari Hiltunen', id: '060526-741B', status: 'Care Call' },
    { time: '01:00 PM', name: 'Petri Niemi', id: '060526-741B', status: 'Consultation' },
    { time: '02:15 PM', name: 'Laura Leppänen', id: '151139-258D', status: 'Remote Session' }
  ];

  tomorrowAppointments: Appointment[] = [
    { time: '09:00 AM', name: 'Anna Laine', id: '240545-123Y', status: 'Remote Session' },
    { time: '09:45 AM', name: 'Mikko Koskinen', id: '210637-963A', status: 'Remote Session' },
    { time: '10:30 AM', name: 'Sari Virtanen', id: '060526-741B', status: 'Office Visit' },
    { time: '11:15 AM', name: 'Jari Hiltunen', id: '060526-741B', status: 'Care Call' },
  ];

  get appointments(): Appointment[] {
    return this.activeTab === 'previous' ? this.previousAppointments : this.tomorrowAppointments;
  }

  patients: Patient[] = [
    { name: 'Oliver Wilson', id: '240545-123Y' },
    { name: 'John Cooper', id: '010132-123Y' },
    { name: 'Rachel Mitchell', id: '150342-456K' },
    { name: 'Michael Newman', id: '300530-789P' },
    { name: 'Anna Sullivan', id: '010141-321N' }
  ];


  get filteredPatients(): Patient[] {
    if (!this.searchTerm) {
      return this.patients;
    }
    
    const term = this.searchTerm.toLowerCase();
    return this.patients.filter(patient => 
      patient.name.toLowerCase().includes(term) || 
      patient.id.toLowerCase().includes(term)
    );
  }

  openPatientForm() {
    this.showPatientForm.set(true);
    document.body.style.overflow = 'hidden';
  }

  closePatientForm() {
    this.showPatientForm.set(false);
    document.body.style.overflow = '';
  }
}