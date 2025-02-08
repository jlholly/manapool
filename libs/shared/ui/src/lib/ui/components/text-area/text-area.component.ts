import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-text-area',
  imports: [CommonModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TextAreaComponent {}
