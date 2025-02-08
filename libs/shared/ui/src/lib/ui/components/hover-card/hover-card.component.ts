import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-hover-card',
  imports: [CommonModule],
  templateUrl: './hover-card.component.html',
  styleUrl: './hover-card.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HoverCardComponent {}
