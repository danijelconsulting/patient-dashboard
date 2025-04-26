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
    { icon: 'description', label: 'Patient View' },
    { icon: 'people', label: 'Patient Messages', badge: 3 },
    { icon: 'medical_services', label: 'Doctor Messages' },
    { icon: 'schedule', label: 'Work Hours', active: true },
    { icon: 'calendar_today', label: 'Calendar' },
    { icon: 'settings', label: 'Settings' },
    { icon: 'health_and_safety', label: 'Health Portal' }
  ];
} 