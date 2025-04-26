import { Component, signal } from '@angular/core';
import { Appointment } from './shared/appointment-card/appointment-card.component';
import { Patient } from './shared/patient-info/patient-info.component';


export class DashboardComponent {
  showPatientForm = signal(false);
  searchTerm = '';

  appointments: Appointment[] = [
    { time: '09:00 AM', name: 'John Smith', id: '240545-123Y', status: 'Remote Session', note: 'Hello doctor, thank you for accepting the appointment. I need help with new symptoms that I started experiencing last week.' },
    { time: '09:45 AM', name: 'Karen Wilson', id: '210637-963A', status: 'Remote Session' },
    { time: '10:30 AM', name: 'Anthony Brooks', id: '060526-741B', status: 'Office Visit' },
    { time: '11:15 AM', name: 'Mary Hill', id: '060526-741B', status: 'Care Call' },
    { time: '01:00 PM', name: 'Peter Newman', id: '060526-741B', status: 'Consultation' },
    { time: '02:15 PM', name: 'Laura Lee', id: '151139-258D', status: 'Remote Session' }
  ];

  patients: Patient[] = [
    { name: 'Oliver White', id: '240545-123Y' },
    { name: 'John Cooper', id: '010132-123Y' },
    { name: 'Rachel Miller', id: '150342-456K' },
    { name: 'Michael Newman', id: '300530-789P' },
    { name: 'Anna Sullivan', id: '010141-321N' }
  ];

  // ... rest of the component code ...
} 