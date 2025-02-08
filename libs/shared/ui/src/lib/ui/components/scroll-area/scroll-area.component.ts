import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-scroll-area',
  imports: [CommonModule],
  templateUrl: './scroll-area.component.html',
  styleUrl: './scroll-area.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ScrollAreaComponent {}
