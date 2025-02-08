import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-collapsible',
  imports: [CommonModule],
  templateUrl: './collapsible.component.html',
  styleUrl: './collapsible.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CollapsibleComponent {}
