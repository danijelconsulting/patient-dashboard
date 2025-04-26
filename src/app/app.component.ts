import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DebugComponent } from './shared/debug/debug.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, DebugComponent],
  template: `
    <router-outlet></router-outlet>
    <!-- Fallback if router-outlet doesn't work -->
    <app-dashboard *ngIf="showFallback"></app-dashboard>
    <!-- Debug component to help diagnose issues -->
    <app-debug></app-debug>
  `,
  styles: []
})
export class AppComponent {
  title = 'patient-dashboard';
  showFallback = false;
  
  constructor() {
    // Show dashboard directly for now (workaround)
    this.showFallback = true;
    
    // Check if the router-outlet works, if not show the dashboard directly after 1 second
    setTimeout(() => {
      const routerOutlet = document.querySelector('router-outlet');
      if (routerOutlet && routerOutlet.childNodes.length === 0) {
        this.showFallback = true;
      }
    }, 1000);
  }
}