import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
  patients = [
    { name: 'Oliver White', id: '240545-123Y', department: 'HUS, Cardiology Department' },
    { name: 'John Cooper', id: '011032-123Y', department: 'HUS, Cardiology Department' },
    { name: 'Rachel Miller', id: '150242-456K', department: 'HUS, Cardiology Department' },
    { name: 'Michael Newman', id: '300630-789P', department: 'HUS, Cardiology Department' },
    { name: 'Anna Sullivan', id: '011041-321N', department: 'HUS, Cardiology Department' }
  ];
}