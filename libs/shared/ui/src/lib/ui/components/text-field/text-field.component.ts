import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-text-field',
  imports: [CommonModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TextFieldComponent {}
