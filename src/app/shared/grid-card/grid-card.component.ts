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
    <div class="flex flex-col items-center p-4 bg-white rounded-lg cursor-pointer">
      <div class="w-12 h-12 mb-3 rounded-lg bg-[#F8F9FC] hover:bg-[#E8E9FC] flex items-center justify-center">
        <mat-icon class="text-[#4A5578]">{{icon}}</mat-icon>
      </div>
      <span class="text-sm text-[#4A5578] text-center font-medium">{{label}}</span>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .mat-icon {
      transform: scale(1.2);
    }
  `]
})
export class GridCardComponent {
  @Input() icon!: string;
  @Input() label!: string;
} 