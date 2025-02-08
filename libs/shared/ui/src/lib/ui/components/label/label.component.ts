import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-label',
  imports: [CommonModule],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LabelComponent {}
