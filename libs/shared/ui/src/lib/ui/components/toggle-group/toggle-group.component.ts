import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-toggle-group',
  imports: [CommonModule],
  templateUrl: './toggle-group.component.html',
  styleUrl: './toggle-group.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ToggleGroupComponent {}
