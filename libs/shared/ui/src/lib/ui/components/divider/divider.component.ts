import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-divider',
  imports: [CommonModule],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DividerComponent {}
