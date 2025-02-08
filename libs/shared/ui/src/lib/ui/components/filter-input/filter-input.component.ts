import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-filter-input',
  imports: [CommonModule],
  templateUrl: './filter-input.component.html',
  styleUrl: './filter-input.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FilterInputComponent {}
