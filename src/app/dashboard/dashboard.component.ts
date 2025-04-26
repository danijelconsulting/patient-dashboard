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

  appointments: Appointment[] = [
    { time: '09:00 AM', name: 'Juha Lahtinen', id: '240545-123Y', status: 'Etävastaanotto', note: 'Hei tohtori, kiitos, että hyväksytte tapaamisen. Tarvitsen apua uusien oireiden kanssa, joita aloin kokea viime viikolla.' },
    { time: '09:45 AM', name: 'Kaarina Mäkinen', id: '210637-963A', status: 'Etävastaanotto' },
    { time: '10:30 AM', name: 'Antti Virtanen', id: '060526-741B', status: 'Vastaanotto' },
    { time: '11:15 AM', name: 'Mari Hiltunen', id: '060526-741B', status: 'Hoitopuhelu' },
    { time: '01:00 PM', name: 'Petri Niemi', id: '060526-741B', status: 'Konsultaatio' },
    { time: '02:15 PM', name: 'Laura Leppänen', id: '151139-258D', status: 'Etävastaanotto' }
  ];

  patients: Patient[] = [
    { name: 'Olavi Virtanen', id: '240545-123Y' },
    { name: 'Juhani Korhonen', id: '010132-123Y' },
    { name: 'Riikka Mäkelä', id: '150342-456K' },
    { name: 'Mikko Nieminen', id: '300530-789P' },
    { name: 'Aino Salminen', id: '010141-321N' }
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
  }

  closePatientForm() {
    this.showPatientForm.set(false);
  }
}