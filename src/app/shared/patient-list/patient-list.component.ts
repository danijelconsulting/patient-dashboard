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
    { name: 'Olavi Virtanen', id: '240545-123Y', department: 'HUS, Kardiologian osasto' },
    { name: 'Juhana Korhonen', id: '011032-123Y', department: 'HUS, Kardiologian osasto' },
    { name: 'Rikka Mäkelä', id: '150242-456K', department: 'HUS, Kardiologian osasto' },
    { name: 'Mikko Nieminen', id: '300630-789P', department: 'HUS, Kardiologian osasto' },
    { name: 'Aino Salminen', id: '011041-321N', department: 'HUS, Kardiologian osasto' }
  ];
}