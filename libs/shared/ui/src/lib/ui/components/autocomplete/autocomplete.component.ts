import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-autocomplete',
  imports: [CommonModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AutocompleteComponent {}
