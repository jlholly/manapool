import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-combobox',
  imports: [CommonModule],
  templateUrl: './combobox.component.html',
  styleUrl: './combobox.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ComboboxComponent {}
