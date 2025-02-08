import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-progress',
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProgressComponent {}
