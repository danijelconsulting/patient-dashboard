import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DebugComponent } from './shared/debug/debug.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DebugComponent, CommonModule],
  template: `
    <router-outlet></router-outlet>
    <app-debug></app-debug>
  `,
  styles: []
})
export class AppComponent {
  title = 'patient-dashboard';
  showFallback = false;
  
  constructor() {
    // Check if the router-outlet works, if not show the dashboard directly after 1 second
    setTimeout(() => {
      const routerOutlet = document.querySelector('router-outlet');
      if (routerOutlet && routerOutlet.childNodes.length === 0) {
        this.showFallback = true;
      }
    }, 1000);
  }
}