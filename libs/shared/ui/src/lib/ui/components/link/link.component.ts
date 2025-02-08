import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-link',
  imports: [CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LinkComponent {}
