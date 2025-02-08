import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-popover',
  imports: [CommonModule],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PopoverComponent {}
