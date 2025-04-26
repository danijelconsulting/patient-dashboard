import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

export interface Appointment {
  time: string;
  name: string;
  id: string;
  status: 'Remote Session' | 'Office Visit' | 'Care Call' | 'Consultation';
  note?: string;
}

@Component({
  selector: 'app-appointment-card',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule
  ],
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})
export class AppointmentCardComponent {
  @Input() appointment!: Appointment;
  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  getLocalizedStatus(status: string): string {
    const statusMap: {[key: string]: string} = {
      'Etävastaanotto': 'Remote Session',
      'Vastaanotto': 'Office Visit',
      'Hoitopuhelu': 'Care Call',
      'Konsultaatio': 'Consultation'
    };
    
    return statusMap[status] || status;
  }
}