import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

interface NavItem {
  icon: string;
  label: string;
  badge?: number;
  active?: boolean;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  navItems: NavItem[] = [
    { icon: 'description', label: 'Potilaan tarkastelu' },
    { icon: 'people', label: 'Potilaan viestit', badge: 3 },
    { icon: 'medical_services', label: 'Lääkärin viestit' },
    { icon: 'schedule', label: 'Työajat', active: true },
    { icon: 'calendar_today', label: 'Kalenteri' },
    { icon: 'settings', label: 'Asetukset' },
    { icon: 'health_and_safety', label: 'Terveysportti' }
  ];
} 