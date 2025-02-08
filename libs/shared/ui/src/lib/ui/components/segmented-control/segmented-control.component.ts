import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-segmented-control',
  imports: [CommonModule],
  templateUrl: './segmented-control.component.html',
  styleUrl: './segmented-control.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SegmentedControlComponent {}
