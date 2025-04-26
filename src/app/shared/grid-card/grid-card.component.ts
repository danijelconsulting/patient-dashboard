import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-grid-card',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  template: `
    <div class="flex flex-col items-center p-5 bg-white rounded-md border border-[var(--border-color)] cursor-pointer hover:shadow-md transition-shadow">
      <div class="w-12 h-12 flex items-center justify-center mb-3 text-[var(--primary-color)]">
        <mat-icon class="scale-150">{{icon}}</mat-icon>
      </div>
      <span class="text-sm font-medium text-[var(--text-primary)] text-center">{{label}}</span>
    </div>
  `,
  styles: []
})
export class GridCardComponent {
  @Input() icon!: string;
  @Input() label!: string;
} 