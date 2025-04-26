import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {
  componentLoaded = true;
  errors: string[] = [];

  ngOnInit() {
    // Log component was initialized
    console.log('Debug component initialized');
    
    // Capture console errors
    const originalError = console.error;
    console.error = (...args) => {
      this.errors.push(args.join(' '));
      originalError.apply(console, args);
    };
  }
} 